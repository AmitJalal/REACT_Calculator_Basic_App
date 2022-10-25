import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    console.log(e.target.value);
    setResult(result.concat(e.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <>
      <div className="heading">
        <h1> Calculator </h1>
      </div>

      {/* Calculator  */}
      <div className="calculator">
        {/* Display */}
        <div className="calculator-display">
          <h1>{result}</h1>
        </div>
        {/* <input type="text" className="calculator-display" placeholder="0" id='answer' value={result} /> */}
        {/* Buttons */}
        <div className="calculator-buttons">
          <button className="operator" value="+" onClick={clickHandler}>
            +
          </button>
          <button className="operator" value="-" onClick={clickHandler}>
            -
          </button>
          <button className="operator" value="*" onClick={clickHandler}>
            ×
          </button>
          <button className="operator" value="/" onClick={clickHandler}>
            ÷
          </button>
          <button className="num-button" value="7" onClick={clickHandler}>
            7
          </button>
          <button className="num-button" value="8" onClick={clickHandler}>
            8
          </button>
          <button className="num-button" value="9" onClick={clickHandler}>
            9
          </button>
          <button className="num-button" value="4" onClick={clickHandler}>
            4
          </button>
          <button className="num-button" value="5" onClick={clickHandler}>
            5
          </button>
          <button className="num-button" value="6" onClick={clickHandler}>
            6
          </button>
          <button className="num-button" value="1" onClick={clickHandler}>
            1
          </button>
          <button className="num-button" value="2" onClick={clickHandler}>
            2
          </button>
          <button className="num-button" value="3" onClick={clickHandler}>
            3
          </button>
          <button className="decimal" value="." onClick={clickHandler}>
            .
          </button>
          <button className="num-button" value="0" onClick={clickHandler}>
            0
          </button>
          <button className="clear" id="clear-btn" onClick={clearDisplay}>
            C
          </button>
          <button className="equal-sign operator" value="=" onClick={calculate}>
            =
          </button>
        </div>
      </div>

      {/* <h3 style={{ color: "white", fontWeight: "light", textAlign: "center" }}>
        <i>- amit jalal</i>
      </h3> */}
    </>
  );
}

export default App;
