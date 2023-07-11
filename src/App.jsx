import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  function handleNumber(number) {
    let result = `${display}${number}`
    if (display === "0"|| display === "00" || display === "000") {
      setDisplay(number);
    
    }else{
      setDisplay(result);
    }
  }

  function handleOperator(operator) {
   
    setDisplay(display + " " + operator + " ");
  }

  function handleEqual() {
   
    setDisplay(eval(display));
  }

  

  function handleClear() {
    setDisplay("0");
  }

  function handleDelete() {
    setDisplay(display.slice(0, -1));
  }

  return (
    <>
      <div className="calculator">
      <div id="display">{display}
      </div>

        <div className="buttons">
          <button
            type="button"
            className="btn btn-yellow"
            id="multiply"
            onClick={() => handleOperator("*")}
          >
            *
          </button>
          <button
            type="button"
            className="btn btn-yellow"
            id="divide"
            onClick={() => handleOperator("/")}
          >
            /
          </button>
          <button
            type="button"
            className="btn btn-yellow"
            id="subtract"
            onClick={() => handleOperator("-")}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-yellow"
            id="add"
            onClick={() => handleOperator("+")}
          >
            +
          </button>

          <button
            type="button"
            className="btn btn-grey"
            id="nine"
            onClick={() => handleNumber(9)}
          >
            9
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="eight"
            onClick={() => handleNumber(8)}
          >
            8
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="seven"
            onClick={() => handleNumber(7)}
          >
            7
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="six"
            onClick={() => handleNumber(6)}
          >
            6
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="five"
            onClick={() => handleNumber(5)}
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="four"
            onClick={() => handleNumber(4)}
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="three"
            onClick={() => handleNumber(3)}
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="two"
            onClick={() => handleNumber(2)}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="one"
            onClick={() => handleNumber(1)}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="zero"
            onClick={() => handleNumber(0)}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="decimal"
            onClick={() => handleNumber('.')}
          >
            .
          </button>

          <button
            type="button"
            className="btn-equal"
            id="equals"
            onClick={handleEqual}
          >
            =
          </button>
          <button
            type="button"
            className="btn-delete"
            id="delete"
            onClick={handleDelete}
          >
            DE
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="double zero"
            onClick={() => handleNumber('00')}
          >
            00
          </button>
          <button
            type="button"
            className="btn btn-grey"
            id="triple zero"
            onClick={() => handleNumber('000')}
          >
            000
          </button>
          <button
            type="button"
            className="btn-clear"
            id="clear"
            onClick={handleClear}
          >
            C
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
