import { MathJax } from "better-react-mathjax";
import { Question } from "./type";

export default function Done({ data, resetQuiz }: { data: Question[], resetQuiz: () => void }) {
  const totalCorrectAnswer: number = data.filter(question => question.correctAnswer == question.userAnswer).length

  return (
    <div className="pt-20 pb-4 px-4 md:px-8 bg-[rgba(28,3,50,1)] min-h-screen max-w-screen">
      <div className="max-w-screen-lg m-auto">
        <div className="flex justify-between items-center bg-violet-700 bg-opacity-30 py-4 px-8 mb-4 rounded-full">
          <div className="text-lg">
            <p>Jawaban benar: <span className="font-semibold"><span className="text-green-500">{totalCorrectAnswer}</span>/10</span></p>
            <p>Poin: <span className="font-semibold">{totalCorrectAnswer * 10}</span></p>
          </div>
          <button type="button" onClick={resetQuiz} className="bg-yellow-500 rounded-full py-1 px-2 text-violet-900">Reset</button>
        </div>

        {data.map(question => {
          const isCorrect = question.correctAnswer == question.userAnswer;

          return (
            <div key={question.no} className={`${isCorrect ? "bg-green-700 border-green-600" : "bg-red-700 border-red-600"} bg-opacity-30 p-4 mb-4 rounded`}>
              <p className="mb-2"><span>{question.no}. </span><MathJax inline>{question.question}</MathJax></p>
              <div className="grid grid-cols-2 gap-2">
                {question!.option!.map((opt, i) => {
                  return (
                    <button key={i}
                      type="button"
                      className={`${question.correctAnswer == i ? "bg-green-700" : "bg-violet-700 " + (question.userAnswer != i && "bg-opacity-30")} py-2 rounded`}>
                      {<MathJax inline>{opt.answer}</MathJax>}
                    </button>
                  )
                })}
              </div>
              <div className="mt-2 border border-violet-700 rounded p-2 md:p-4 overflow-auto break-words">
                <h3>Pembahasan:</h3>
                <MathJax inline>{question.solution}</MathJax>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
