type Option = {
  alphabet: string,
  answer: string,
}

export type Question = {
  no?: number,
  question?: string,
  option?: Option[],
  correctAnswer?: number,
  userAnswer?: number,
}
