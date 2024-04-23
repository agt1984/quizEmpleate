import "./App.css";
import React, { useEffect, useMemo, useState } from "react";
import Start from "./components/Start.jsx";
import Timer from "./components/Timer.jsx";
import Trivia from "./components/Trivia.jsx";

function App() {
  const [startPage, setStartPage] = useState(true);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  //TODO: traer el data del back con data.service
  const data = [
    {
      question:
        "¿Es recomendable incluir estos apartados en un Currículum?: Datos Personales, Experiencia Profesional, Formación Académica y Complementaria, Idiomas, Conocimientos Tecnológicos y Otros datos de interés.",
      answers: [
        {
          text: "Si, ya que estos apartados nos permiten presentar un perfil completo y atractivo.",
          correct: true,
        },
        {
          text: "No, solo se debe incluir aquello que entre en una hoja.",
          correct: false,
        },
        {
          text: "No, solo la experiencia profesional y la formación.",
          correct: false,
        },
        {
          text: "No, solo la experiencia profesional, la formación y los idiomas.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Es recomendable incluir una foto profesional y reciente en el Currículum?",
      answers: [
        {
          text: "Si, una foto adecuada y profesional puede mejorar la primera impresión y ayudarte a destacar.",
          correct: true,
        },
        {
          text: "No, una foto puede distraer a los reclutadores.",
          correct: false,
        },
        {
          text: "No, una foto es algo discriminatorio.",
          correct: false,
        },
        {
          text: "No, las fotos en los CVs están obsoletas en la era digital.",
          correct: false,
        },
      ],
    },
    {
      question: "¿Es recomendable incluir el estado civil en un Currículum?",
      answers: [
        {
          text: "No, ya que tu estado civil no es relevante y podría generar discriminación.",
          correct: true,
        },
        {
          text: "Si, ya que es relevante para algunos trabajos.",
          correct: false,
        },
        {
          text: "Si, ya que es obligatorio incluirlo.",
          correct: false,
        },
        {
          text: "Si, ya que el estado civil puede aumentar las oportunidades laborales.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Es importante incluir la dirección completa en un Currículum?",
      answers: [
        {
          text: "No es necesario incluir tu dirección completa, lo recomendable es incluir solo la ciudad.",
          correct: true,
        },
        {
          text: "Si, ya que es obligatorio incluirla.",
          correct: false,
        },
        {
          text: "Si, ya que es necesario para saber donde vives.",
          correct: false,
        },
        {
          text: "Si, ya que es importante vivir cerca del trabajo.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Es recomendable destacar de forma llamativa (negrita, otro color, etc.) en un Currículum los puestos de trabajo, los títulos de las formaciones y otros aspectos relevantes para el puesto?",
      answers: [
        {
          text: "Si, ya que ayuda a que los reclutadores encuentren rápidamente esta información en tu CV.",
          correct: true,
        },
        {
          text: "No, ya que destacar de este modo puede distraer a los reclutadores.",
          correct: false,
        },
        {
          text: "No, ya que la sobriedad es clave en un CV.",
          correct: false,
        },
        {
          text: "No, ya que los reclutadores prefieren un formato uniforme en los CVs.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Es importante incluir en las experiencias laborales el mes y año de comienzo y el mes y año de finalización de cada una de ellas?",
      answers: [
        {
          text: "Si, ya que los reclutadores necesitan conocer el tiempo total de tu trayectoria profesional.",
          correct: true,
        },
        {
          text: "No, las fechas son irrelevantes para los reclutadores, lo importante son las funciones.",
          correct: false,
        },
        {
          text: "No, con poner el año de comienzo y el año de fin es suficiente.",
          correct: false,
        },
        {
          text: "No, con poner el tiempo total en años es suficiente.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Es recomendable incluir en todos los puestos de trabajo que hayas tenido un resumen de las funciones más relevantes que has desarrollado en cada uno de ellos?",
      answers: [
        {
          text: "Si, las funciones demuestran lo que sabes hacer y tus conocimientos.",
          correct: true,
        },
        {
          text: "No, las funciones ocupan mucho espacio innecesario en un CV.",
          correct: false,
        },
        {
          text: "No, las funciones es algo que se comenta en la entrevista.",
          correct: false,
        },
        {
          text: "No, con el nombre de los puestos que has ocupado, las funciones son obvias.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Las experiencias profesionales y las formaciones se colocan de las más antiguas a las mas recientes?",
      answers: [
        {
          text: "No, las experiencias y formaciones se colocan de las más recientes a las más antiguas.",
          correct: true,
        },
        {
          text: "Las fechas no son relevantes en un CV, por lo que puedes colocar la información de cualquier modo.",
          correct: false,
        },
        {
          text: "No hay un orden específico para colocar las experiencias y las formaciones.",
          correct: false,
        },
        {
          text: "Las experiencias y formaciones deben estar ordenadas alfabéticamente.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿Es necesario incluir las horas lectivas de los cursos en un Currículum?",
      answers: [
        {
          text: "Si, las horas lectivas demuestran tu dedicación y el tiempo invertido en tu formación.",
          correct: true,
        },
        {
          text: "No, las horas lectivas no son relevantes para los empleadores.",
          correct: false,
        },
        {
          text: "No, incluir horas lectivas puede hacer que el CV sea demasiado detallado.",
          correct: false,
        },
        {
          text: "No, las horas lectivas ocupan espacio en el CV y no es un aspecto importante.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿La forma correcta de incluir un idioma en el Currículum es indicando el idioma que tienes y el nivel que tienes en A1, A2, B1, B2, C1 o C2 o Nativo, aunque no lo tengas certificado?",
      answers: [
        {
          text: "Si, utilizar el Marco Europeo de Referencia para las Lenguas es el método más adecuado.",
          correct: true,
        },
        {
          text: "No, incluir niveles de idioma sin certificación oficial es engañoso.",
          correct: false,
        },
        {
          text: "No, los niveles de idioma no son importantes en un CV.",
          correct: false,
        },
        {
          text: "No es necesario incluir los idiomas que hablas en un CV.",
          correct: false,
        },
      ],
    },
    {
      question:
        "¿La forma correcta de incluir los conocimientos tecnológicos en el Currículum es indicando el nombre del programa, etc. y el nivel que tienes con escalas de conocimiento iguales para ti que para el reclutador, como, por ejemplo: Word: 100%, Excel: 50%?",
      answers: [
        {
          text: "Si, especificar el nivel de dominio de esta manera es la forma correcta.",
          correct: true,
        },
        {
          text: "No, los niveles de conocimiento de herramientas tecnológica no es un aspecto relevante en un CV.",
          correct: false,
        },
        {
          text: "No, con poner los nombres de las herramientas tecnológicas es suficiente.",
          correct: false,
        },
        {
          text: "No es necesario incluir los conocimientos tecnológicos en un CV.",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {startPage ? (
        <Start setStartPage={setStartPage} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">Has ganado: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          {!timeOut && ( // Asegura que el componente de la pirámide de dinero solo se muestre cuando timeOut sea falso
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((m) => (
                  <li
                    key={m.id}
                    className={
                      questionNumber === m.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
