import { useState } from "react";

function Calculator() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/"];

  const [total, setTotal] = useState(null);
  const [operator, setOperator] = useState("");
  const [number, setNumber] = useState("");

  const handleDigitClick = (digit) => {
    setNumber(number + digit);
  };

  const handleClearClick = () => {
    setTotal(null);
    setOperator("");
    setNumber("");
  };

  const handleOperatorClick = (newOperator) => {
    if (number === "") {
      setOperator(newOperator);
      setTotal(total);
    } else if (total === null) {
      setTotal(Number(number));
      setOperator(newOperator);
      setNumber("");
    } else {
      let result;
      switch (operator) {
        case "+":
          result = total + Number(number);
          break;
        case "-":
          result = total - Number(number);
          break;
        case "*":
          result = total * Number(number);
          break;
        case "/":
          if (Number(number) === 0) {
            alert("Cannot divide by zero!");
            return;
          }
          result = total / Number(number);
          break;
        default:
          result = total;
      }
      setTotal(result);
      setOperator(newOperator);
      setNumber("");
    }
  };

  const handleEqualClick = () => {
    if (!operator) {
      return;
    }
    let result;
    switch (operator) {
      case "+":
        result = total + Number(number);
        break;
      case "-":
        result = total - Number(number);
        break;
      case "*":
        result = total * Number(number);
        break;
      case "/":
        if (Number(number) === 0) {
          alert("Cannot divide by zero!");
          return;
        }
        result = total / Number(number);
        console.log(result);
        break;
      default:
        result = total;
    }
    setTotal(result);
    setOperator("");
    setNumber(result.toFixed(2));
  };

  return (
    <div>
      <div className="screen">
        {number !== "" ? (
          <p>{number}</p>
        ) : (
          <p>
            {operator} {total === null ? "" : total}
          </p>
        )}
      </div>
      <div className="num-container">
        {digits.map((digit) => (
          <button
            key={digit}
            className="num"
            onClick={() => handleDigitClick(digit)}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className="tasks-cont">
        {operators.map((operator, idx) => (
          <button
            key={idx}
            className="tasks"
            onClick={() => handleOperatorClick(operator)}
          >
            {operator}
          </button>
        ))}
      </div>
      <div className="clearBox">
        <button className="clear" onClick={() => handleClearClick()}>
          C
        </button>
        <button className="ans" onClick={() => handleEqualClick()}>
          =
        </button>
      </div>
    </div>
  );
}
export default Calculator;
