import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./components/Calculator";
const App = () => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
