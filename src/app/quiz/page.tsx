"use client"

import { MathJax, MathJaxContext } from "better-react-mathjax";
import { mathJaxConfig } from "../learn/layout";
import { useEffect, useState } from "react";

type Option = {
  alphabet: string,
  answer: string,
}

export type Question = {
  no: number,
  question: string,
  option: Option[],
  correctAnswer: number,
}

type UserAnswer = {
  no: number,
  answerIndex: number,
  correctAnswerIndex: number,
  isCorrect: boolean,
}

export default function Quiz() {
  const [data, setData] = useState<Question[]>([]);
  const [isDone, setIsDone] = useState<boolean>(() => {
    const isDone: string | null = typeof window !== "undefined" ? window.localStorage.getItem("is-done") : null;
    return isDone ? true : false
  });
  const [userAnswers, setUserAnswers] = useState<Array<UserAnswer>>(() => {
    const answers = typeof window !== "undefined" ? window.localStorage.getItem("user-answers") : null;
    return answers ? JSON.parse(answers) : []
  });

  useEffect(() => {
    fetch('/api/quiz')
      .then((response) => response.json())
      .then((data: Question[]) => {
        setData(data)
        const userAnswers: UserAnswer[] = data.map(item => ({
          no: item.no,
          answerIndex: -1,
          correctAnswerIndex: item.correctAnswer,
          isCorrect: false,
        }));
        setUserAnswers(userAnswers)
      })
  }, []);

  const handleQuizDone = () => {
    localStorage.setItem("user-answers", JSON.stringify(userAnswers));
    setIsDone(true);
    localStorage.setItem("is-done", "true");
  }

  const storeAnswer = (no: number, answerIndex: number, correctAnswerIndex: number) => {
    const isCorrect = answerIndex == correctAnswerIndex
    setUserAnswers([...(userAnswers || []), { no, answerIndex, correctAnswerIndex, isCorrect }])
    const newUserAnswers = userAnswers.map(item => {
      if (no == item.no) {
        return { no, answerIndex, correctAnswerIndex, isCorrect }
      }
      return item
    })
    setUserAnswers(newUserAnswers)
  }

  if (isDone) {
    return (
      <div className="py-20 bg-[rgba(28,3,50,1)] min-h-screen max-w-screen">
        <MathJaxContext config={mathJaxConfig}>
          <div className="max-w-screen-lg m-auto">
            {data.map(question => {
              const filteredQuestion: string[] = question.question.split("|");
              const userAnswer: UserAnswer | undefined = userAnswers.find(answer => question.no == answer.no)

              return (
                <div key={question.no} className={`border ${userAnswer?.isCorrect ? "bg-green-900 border-green-800" : "bg-red-900 border-red-700"} bg-opacity-30 p-4 mb-4`}>
                  <p><span>{question.no}. </span>{filteredQuestion[0]} <span className="inline-block"><MathJax>{`$$ ${filteredQuestion[1]} $$`}</MathJax></span> {filteredQuestion[2]}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {question.option.map((opt, i) => {
                      return (
                        <button key={i}
                          onClick={() => storeAnswer(question.no, i, question.correctAnswer)}
                          type="button"
                          className={`${userAnswer?.correctAnswerIndex == i && "border-2 border-green-400"} ${userAnswer?.answerIndex == i && "border-2"} bg-violet-700 py-2 rounded`}>
                          {opt.answer}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </MathJaxContext >
      </div >
    )
  }

  return (
    <div className="py-20 bg-[rgba(28,3,50,1)] min-h-screen max-w-screen">
      <MathJaxContext config={mathJaxConfig}>
        <div className="max-w-screen-lg m-auto">
          {data.map(question => {
            const filteredQuestion: string[] = question.question.split("|");
            const userAnswer: UserAnswer | undefined = userAnswers.find(answer => question.no == answer.no)

            return (
              <div key={question.no} className="border border-violet-700 p-4 mb-4">
                <p className="mb-2"><span>{question.no}. </span>{filteredQuestion[0]}<MathJax inline>{`$ ${filteredQuestion[1]} $`}</MathJax> {filteredQuestion[2]}</p>
                <div className="grid grid-cols-2 gap-2">
                  {question.option.map((opt, i) => {
                    const answerIndex = userAnswer?.answerIndex;
                    return (
                      <button key={i} onClick={() => storeAnswer(question.no, i, question.correctAnswer)} type="button"
                        className={`${answerIndex == i && "border-b-2"} bg-violet-900 hover:bg-violet-800 active:bg-violet-700 py-2 rounded`}>{opt.answer}</button>
                    )
                  })}
                </div>
              </div>
            )
          })}

          <div className="flex justify-center">
            <button type="button" onClick={handleQuizDone} className="px-4 py-1 bg-green-600 hover:bg-green-500 active:bg-green-400 rounded">selesai</button>
          </div>
        </div>
      </MathJaxContext >
    </div >
  );
}
