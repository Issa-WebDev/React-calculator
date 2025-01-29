import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./style.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  // clear input
  const clear = () => setInputValue("");

  // add value
  const addValue = (value) => {
    setInputValue((prev) => prev + value);
  };

  // calculate 🛑❌ do not use eval() ==> this is not good for security
  const calculate = () => {
    try {
      // you can use (mathjs) 
      setInputValue(String(evaluate(inputValue)));

      // you can also use a function 
      // setInputValue(String(Function(`"use strict"; return (${inputValue})`)()));
    } catch (error) {
      setInputValue("Erreur !");
    }
  };

  // delete last element
  const deleteOneByOne = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  return (
    <div className="container">
      <h1 className="title">Calculator with react js</h1>
      <div className="form">
        <input
          type="text"
          className="input"
          readOnly
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New calc"
        />
        <div className="touchParent">
          <button className="btn" onClick={() => clear()}>
            AC
          </button>
          <button className="btn" onClick={deleteOneByOne}>
            🔙
          </button>
          <button className="btn" onClick={() => addValue("%")}>
            %
          </button>
          <button className="btn" onClick={() => addValue("/")}>
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
            .
          </button>
          <button onClick={calculate} className="btn" type="submit">
            {"="}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
