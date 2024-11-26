"use client"

import { useEffect, useState } from "react";
import { Question } from "./type";
import QuizBox from "./quizBox";
import Loading from "../loading";
import Done from "./done";

export default function Quiz() {
  const [data, setData] = useState<Question[]>([]);
  const [dataDefault, setDataDefault] = useState<Question[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [isAnswerNull, setAnswerIsNull] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api/quiz')
      .then((response) => response.json())
      .then((data: Question[]) => {
        const listOfQuestion: string | null = typeof window !== "undefined" ? window.localStorage.getItem("questions") : null;
        const questions: Question[] = listOfQuestion ? JSON.parse(listOfQuestion) : data;
        setData(questions)
        setDataDefault(data)
      })

    const isDone = window.localStorage.getItem("is-done");
    setIsDone(!!isDone);
  }, []);

  const handleQuizDone = () => {
    setIsDone(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("is-done", "true");
    }
  }

  const nextQuestion = () => {
    if (!data[currentQuestion].userAnswer) {
      setAnswerIsNull(true);
      return;
    }
    setAnswerIsNull(false);
    if (currentQuestion >= 9) {
      handleQuizDone();
      return
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  const storeAnswer = (no?: number, userAnswer?: number) => {
    const updatedQuestions = data.map(item => {
      if (item.no == no) {
        return { ...item, userAnswer }
      }
      return item
    })
    setData(updatedQuestions)
    if (typeof window !== "undefined") {
      localStorage.setItem("questions", JSON.stringify(updatedQuestions))
    }
  }

  const resetQuiz = () => {
    if (!confirm("yakin?")) {
      return
    }

    if (typeof window !== "undefined") {
      localStorage.removeItem("is-done")
      localStorage.removeItem("questions")
    }

    setCurrentQuestion(0)
    setIsDone(false)
    setData(dataDefault)
  }

  if (isDone) {
    return <Done data={data} resetQuiz={resetQuiz} />
  }

  return data.length == 0 ? <Loading /> : (
    <div className="flex justify-center items-center bg-[rgba(28,3,50,1)] min-h-screen max-w-screen">
      <div className="px-4 md:px-0">
        <h4 className="font-medium mb-2 text-center">{data[currentQuestion].no}/10</h4>
        {isAnswerNull ? <div className="bg-red-700 border-red-600 bg-opacity-30 p-4 mb-4 rounded">Jawaban tidak boleh kosong!!!</div> : null}
        <QuizBox currentQuestion={data[currentQuestion]} nextQuestion={nextQuestion} storeAnswer={storeAnswer} />
      </div>
    </div>
  );
}
