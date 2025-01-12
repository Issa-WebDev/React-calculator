import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => setInputValue("");

  const addValue = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = (e) => {
    e.preventDefault();
    const result = eval(inputValue);
    setInputValue(result);
  };

  // const removeOne = () => {
  //   setInputValue(inputValue.slice(0, -1));
  // };

  return (
    <div className="container">
      <h1 className="title">Calculator with react js</h1>
      <form className="form" onSubmit={calculate}>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New calc"
        />
        <div className="touchParent">
          <button className="btn" onClick={() => clear()}>
            AC
          </button>
          <button className="btn">🔙</button>
          <button className="btn" onClick={() => addValue("2")}>
            %
          </button>
          <button className="btn" onClick={() => addValue("2")}>
            /
          </button>
        </div>

        <div className="touchParent">
          <button className="btn" onClick={() => addValue("7")}>
            7
          </button>
          <button className="btn" onClick={() => addValue("8")}>
            8
          </button>
          <button className="btn" onClick={() => addValue("9")}>
            9
          </button>
          <button className="btn" onClick={() => addValue("*")}>
            x
          </button>
        </div>

        <div className="touchParent">
          <button className="btn" onClick={() => addValue("4")}>
            4
          </button>
          <button className="btn" onClick={() => addValue("5")}>
            5
          </button>
          <button className="btn" onClick={() => addValue("6")}>
            6
          </button>
          <button className="btn" onClick={() => addValue("-")}>
            -
          </button>
        </div>

        <div className="touchParent">
          <button className="btn" onClick={() => addValue("1")}>
            1
          </button>
          <button className="btn" onClick={() => addValue("2")}>
            2
          </button>
          <button className="btn" onClick={() => addValue("3")}>
            3
          </button>
          <button className="btn" onClick={() => addValue("+")}>
            +
          </button>
        </div>

        <div className="touchParent">
          <button className="btn" onClick={() => addValue("00")}>
            00
          </button>
          <button className="btn" onClick={() => addValue("0")}>
            0
          </button>
          <button className="btn" onClick={() => addValue(".")}>
            ,
          </button>
          <button className="btn" type="submit">
            =
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
