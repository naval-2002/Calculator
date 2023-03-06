import { useState } from "react";

function Calculator() {
  const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const tasks = ["+", "-", "*", "/"];

  const [total, setTotal] = useState(0);
  const [action, setAction] = useState("");
  const [number, setNumber] = useState("");

  const num = (num) => {
    setNumber(number + num);
  };
  const clear = () => {
    setAction("");
    setNumber("");
    setTotal(0);
  };
  function cal(task) {
    if (number === "") {
      setAction(task);
      setTotal(total);
    } else if (total === 0) {
      setTotal(Number(number));
      setAction(task);
      setNumber("");
    } else {
      let result = 0;
      if (action === "+") {
        result = total + Number(number);
      } else if (action === "-") {
        result = total - Number(number);
      } else if (action === "*") {
        result = total * Number(number);
      } else if (action === "/") {
        result = total / Number(number);
      }
      setTotal(result);
      setAction(task);
      setNumber("");
    }
  }

  const equal = () => {
    if (!action) {
      return;
    }
    let result = 0;
    if (action === "+") {
      result = total + Number(number);
    } else if (action === "-") {
      result = total - Number(number);
    } else if (action === "*") {
      result = total * Number(number);
    } else if (action === "/") {
      result = total / Number(number);
    }
    setTotal(result);
    setAction("");
    setNumber(result);
  };

  return (
    <div className=" ">
      <div className="screen">
        {number !== "" ? <p>{number}</p> : <p>{total}</p>}
      </div>
      <div className="num-container">
        {digit.map((val) => {
          return (
            <p onClick={() => num(val)} className="num">
              {val}
            </p>
          );
        })}
      </div>
      <div className="tasks-cont">
        {tasks.map((task) => {
          return (
            <div>
              <button className="tasks" onClick={() => cal(task)}>
                {task}
              </button>
            </div>
          );
        })}
      </div>
      <div className="clearBox">
        <button className="clear" onClick={() => clear()}>
          C
        </button>
        <button className="ans" onClick={() => equal()}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
