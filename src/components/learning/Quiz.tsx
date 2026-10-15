import { useState } from 'react';
import type { QuizQuestion } from '../../types/course';
export function Quiz({ questions }: { questions: QuizQuestion[] }) {
 const [answers,setAnswers]=useState<Record<string,number>>({});
 if (!questions.length) return <div className="empty-state">Las preguntas de esta clase se incorporarán al desarrollar el módulo.</div>;
 return <div className="stack">{questions.map((q,i)=><div className="panel" key={q.id}><div className="eyebrow">PREGUNTA {i+1}</div><h3>{q.question}</h3><div className="options">{q.options.map((o,j)=><button className={'option '+(answers[q.id]===j?'selected':'')} key={j} onClick={()=>setAnswers(a=>({...a,[q.id]:j}))}>{o}</button>)}</div>{answers[q.id]!==undefined&&<p className={answers[q.id]===q.correctIndex?'correct':'incorrect'}>{answers[q.id]===q.correctIndex?'Correcto. ':'Revisá tu respuesta. '}{q.explanation}</p>}</div>)}</div>
}
