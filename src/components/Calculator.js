import { useState } from "react";
import { FaPlus} from "react-icons/fa"
const Calculator = () => {
  const [inputNum1, setInputNum1] = useState("");
  const [inputNum2, setInputNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("")
  const [sucess, setSucess] = useState("")
  console.log(inputNum1, inputNum2);
 function calculation(operation) {
     if (inputNum1 == null ) {
        setError("Num1 Cannot Be Empty")
     }else
     if ( inputNum2 == null ) {
        setError("Num2 Cannot Be Empty")
     }else{
       setSucess("Result - ")
         setResult(Number(inputNum1) + (operation) + Number(inputNum1))
     }
  }
  return (
    <div className="body">
      <h1>React Calculator</h1>
      <div className="input-section">
        <input
        placeholder=" Num 1"
          type="text"
          value={inputNum1}
          className="num-1"
          onChange={(e) => {
            setInputNum1(e.target.value);
          }}
        />
        <input
        placeholder=" Num 2"
          type="text"
          value={inputNum2}
          className="num-2"
          onChange={(e) => {
            setInputNum2(e.target.value);
          }}
        />
      </div>
      <div className="btn-section">
<button className="btn" onClick={calculation}><FaPlus/></button>
      </div>
      <div className="result">
        {
            error ? "" : <h2 className="error"> Error </h2>
        }
      </div>
    </div>
  );
};

export default Calculator;
