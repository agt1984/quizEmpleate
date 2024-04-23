export default function Start({ setStartPage }) {
  const handleClick = () => {
    setStartPage(false);
  };
  return (
    <div className="start">
      <h1 className="title">
        ¡Pon a prueba tus conocimientos sobre cómo crear un CV que te ayude a
        conseguir más entrevistas de trabajo!
      </h1>
      <button className="startButton" onClick={handleClick}>
        Comenzar
      </button>
    </div>
  );
}
