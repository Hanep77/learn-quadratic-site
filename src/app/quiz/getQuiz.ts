import fs from 'fs';
import path from 'path';

type Option = {
  alphabet: string,
  answer: string,
}

export type Question = {
  no: number,
  question: string,
  option: Option[],
}

export default function handler(): Question[] {
  const filePath = path.join(process.cwd() + '/src/app/quiz/list-question.json');
  const result = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(result) as Question[];
}
