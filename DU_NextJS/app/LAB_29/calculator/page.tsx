"use client";

import React, { useState } from "react";

export default function CalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (n: string) => {
    if (display === "0") setDisplay(n);
    else setDisplay(display + n);
  };

  const handleOperator = (op: string) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const fullEquation = equation + display;
      // Note: eval is used here for simplicity in a lab demo, 
      // but is generally a security risk in production.
      const result = eval(fullEquation);
      setDisplay(String(result));
      setEquation("");
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Lab 29: basic Calculator</h1>
      <div className="bg-gray-200 p-6 rounded-xl shadow-lg border border-gray-300 w-80">
        <div className="bg-black text-green-400 text-right p-4 rounded mb-4 font-mono text-xl overflow-hidden">
          <div className="text-xs text-gray-500 h-4">{equation}</div>
          <div>{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map(btn => (
             <button 
                key={btn}
                onClick={() => isNaN(parseInt(btn)) ? handleOperator(btn) : handleNumber(btn)}
                className="bg-white p-4 rounded shadow hover:bg-gray-100 font-bold"
              >{btn}</button>
          ))}
          {["4", "5", "6", "*"].map(btn => (
             <button 
                key={btn}
                onClick={() => isNaN(parseInt(btn)) ? handleOperator(btn) : handleNumber(btn)}
                className="bg-white p-4 rounded shadow hover:bg-gray-100 font-bold"
              >{btn}</button>
          ))}
          {["1", "2", "3", "-"].map(btn => (
             <button 
                key={btn}
                onClick={() => isNaN(parseInt(btn)) ? handleOperator(btn) : handleNumber(btn)}
                className="bg-white p-4 rounded shadow hover:bg-gray-100 font-bold"
              >{btn}</button>
          ))}
          {["0", ".", "=", "+"].map(btn => (
             <button 
                key={btn}
                onClick={() => btn === "=" ? calculate() : isNaN(parseInt(btn)) && btn !== "." ? handleOperator(btn) : handleNumber(btn)}
                className={`${btn === "=" ? 'bg-orange-500 text-white' : 'bg-white'} p-4 rounded shadow hover:opacity-80 font-bold`}
              >{btn}</button>
          ))}
          <button onClick={clear} className="col-span-4 bg-red-500 text-white p-4 rounded mt-2 font-bold shadow hover:bg-red-600">CLEAR</button>
        </div>
      </div>
    </div>
  );
}
