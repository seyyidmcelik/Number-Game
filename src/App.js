import "./App.css";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

function App() {
  const input = useRef();
  const button = useRef();
  const [number, setNumber] = useState();
  const [start, setStart] = useState(false);
  const [showText, setShowText] = useState(false);

  const startGame = () => {
    setStart(true);
    setShowText(false);
  };

  const endGame = () => {
    setStart(false);
    setNumber(null);
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      button.current.click();
    }
  };

  const update = () => {
    if (isNaN(input.current.value)) {
      Swal.fire({
        icon: "warning",
        title: "Opps..",
        text: "You should only numbers",
        showConfirmButton: false,
        timer: 1750,
      });
      input.current.value = null;
      input.current.focus();
    } else if (input.current.value <= 0 || input.current.value > 10) {
      Swal.fire({
        icon: "warning",
        title: "Opps..",
        text: "Your estimate must be between 1 and 10",
        showConfirmButton: false,
        timer: 1750,
      });
      input.current.value = null;
      input.current.focus();
    } else if (Number(number) === Number(input.current.value)) {
      Swal.fire({
        icon: "warning",
        title: "Opps..",
        text: "Change the estimate number",
        showConfirmButton: false,
        timer: 1750,
      });
      input.current.focus();
      input.current.value = null;
    } else {
      setNumber(input.current.value);
      input.current.value = null;
      setShowText(true);
      input.current.focus();
    }
  };

  let randomNumber = Math.floor(Math.random() * 10 + 1);

  return (
    <div className="App">
      <div className="container">
        {start ? null : (
          <div>
            <h3>Welcome to the Estimating Number Game</h3>
            <button className="btn" onClick={startGame} id="startButton">
              New Game
            </button>
          </div>
        )}
        {Number(number) === randomNumber ? (
          <div className="welcome">
            <h3>Congraculations</h3>
            <p>You win</p>
            <p>{`Number was ${number}`}</p>
            <button className="btn" onClick={endGame}>
              Leave
            </button>
          </div>
        ) : start ? (
          <div id="gameContainer">
            <h3>Number Estimate Game</h3>
            <input
              type="text"
              name=""
              id=""
              ref={input}
              onKeyPress={handleKeyPress}
            />
            <button className="btn" onClick={update} ref={button}>
              Click
            </button>
            {showText ? (
              <p>{`Your estimate is ${
                number ? number : "empty"
              } and random number is ${randomNumber}`}</p>
            ) : (
              <p> </p>
            )}
            <button className="btn" onClick={endGame}>
              Leave
            </button>
          </div>
        ) : null}
        <div className="bubbles">
          <span id="span1">1</span>
          <span id="span2">2</span>
          <span id="span3">3</span>
          <span id="span4">4</span>
          <span id="span5">5</span>
          <span id="span6">6</span>
          <span id="span7">7</span>
          <span id="span8">8</span>
          <span id="span9">9</span>
          <span id="span10">10</span>
        </div>
      </div>
    </div>
  );
}

export default App;
