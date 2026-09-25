import { useState } from "react";

export default function CheckBoxButton() {
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  //functions
  function handleClick() {
    setText("Clickato");
  }

  function handleReset() {
    setText("");
  }

  return (
    <div className="container mb-3">
      <div>
        <input
          type="checkbox"
          id="check"
          checked={isClicked}
          onChange={(e) => setIsClicked(e.target.checked)}
        />
        <a
          href=""
          className="m-3">
          Our Policy
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className={`btn  ${isClicked ? "btn-primary" : "btn-secondary"}`}
          //if checbox clicked ? handleClick : ''
          onClick={isClicked ? handleClick : handleReset}>
          Invia
        </button>
      </div>
      <p>{text}</p>
    </div>
  );
}
