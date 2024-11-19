import fs from 'fs';
import path from 'path';

function handler() {
  const filePath = path.join(process.cwd() + '/src/app/api/quiz/list-question.json');
  const result = fs.readFileSync(filePath, 'utf8')
  return result;
}

export async function GET() {
  return new Response(handler(), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
