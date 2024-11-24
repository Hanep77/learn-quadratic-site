import { MathJax } from "better-react-mathjax"
import { Question } from "./type"

export default function QuizBox({ storeAnswer, nextQuestion, currentQuestion }: { storeAnswer: (no?: number, userAnswer?: number) => void, nextQuestion: () => void, currentQuestion: Question | null }) {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-md m-auto p-4 rounded bg-violet-700 bg-opacity-30 gap-5">
      <div className="flex items-center rounded mb-4 md:w-1/2">
        <p className="text-lg"><span>{currentQuestion?.no}. </span><MathJax dynamic>{currentQuestion?.question}</MathJax></p>
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col gap-2 mb-4">
          {currentQuestion?.option?.map((opt, i) => {
            return (
              <button onClick={() => storeAnswer(currentQuestion?.no, i)} key={i} type="button"
                className={`${currentQuestion.userAnswer != i && "bg-opacity-20"} bg-violet-800 py-2 rounded`}>{<MathJax inline>{opt.answer}</MathJax>}</button>
            )
          })}
        </div>
        <div>
          <button type="button" className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 py-2 rounded font-medium"
            onClick={nextQuestion}>{currentQuestion?.no == 10 ? "Selesai" : "Lanjut"}</button>
        </div>
      </div>
    </div>
  )
}
