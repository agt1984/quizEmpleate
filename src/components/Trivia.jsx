import { useEffect, useState } from "react";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");


  useEffect(() => {
    setQuestion(data[questionNumber - 1]); //como el primer elemento del array es cero, le coloco menos 1
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(()=>{
        callback()
    }, duration);
  }

  const handleClick = (a) => {
    setselectedAnswer(a);
    setClassName("answer active");
    delay(3000, ()=> 
        setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () =>{
        if (a.correct) {
            setQuestionNumber((prev) => prev + 1);
            setselectedAnswer(null);
        }else{
            setStop(true);
        }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
