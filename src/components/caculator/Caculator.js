import React, { useState } from "react";
import { evaluate, typeOf } from "mathjs";
import Shell from "./Shell";

const Caculator = (props) => {
  const [exp, setExp] = useState("");
  const [currVal, setCurrVal] = useState("");

  const onAddExp = (val) => {
    // rong
    if (exp === "") {
      if (typeOf(val) === "number") {
        setExp((exp) => (exp += val));
      } else {
        if (val === "+" || val === "-") {
          setExp((exp) => (exp += val));
        }
      }
    }

    // bat dau bang +-
    if (/^[+-]$/gim.test(exp)) {
      if (typeOf(val) === "number") {
        setExp((exp) => exp + val);
      } else {
        if (val === "+" || val === "-") {
          setExp((exp) => exp.slice(0, exp.length - 1) + val);
        }
      }
    }

    // ket thuc bang 1 so
    if (/[0-9]+$/gim.test(exp)) {
      setExp((exp) => exp + val);
    }

    // ket thuc bang 1 toan tu
    if (/[0-9]+[-+*/]$/gim.test(exp)) {
      if (typeOf(val) === "number") {
        setExp((exp) => exp + val);
      } else {
        if (val === "-") {
          setExp((exp) => exp + val);
        } else {
          setExp((exp) => exp.slice(0, exp.length - 1) + val);
        }
      }
    }

    // ket thuc bang --, +-, *-. /-
    if (/[-+*/]-$/gim.test(exp)) {
      if (typeOf(val) === "number") {
        setExp((exp) => exp + val);
      } else {
        setExp((exp) => exp.slice(0, exp.length - 2) + val);
      }
    }

    // chua dau bang
    if (/=/.test(exp)) {
      if (typeOf(val) === "string") {
        setExp(currVal + val);
      } else {
        setExp(val);
      }
    }

    // ket thuc bang dau .
    if (/[.]$/gim.test(exp)) {
      console.log("dau cham");
      if (typeOf(val) === "number") {
        setExp((exp) => exp + val);
      }
    }
  };

  const onClearAll = () => {
    setExp("");
    setCurrVal("");
  };

  const onEval = () => {
    if (!/=/.test(exp) && exp !== "" && !/[-+*/]$/.test(exp)) {
      setExp((exp) => `${exp}=${evaluate(exp)}`);
      setCurrVal(evaluate(exp));
    }
  };

  return (
    <div className="w-72 md:w-80 mx-auto mt-5 bg-black p-2 font-mono">
      <div className="h-12 col-span-4 text-yellow-500 text-2xl text-right overflow-auto">
        {exp}
      </div>
      <div className="h-12 text-white text-3xl text-right overflow-auto">
        {currVal ? currVal : 0}
      </div>

      <div className="w-full h-full grid grid-flow-row grid-cols-4">
        <Shell
          value="AC"
          moreClass="bg-red-500 col-span-2"
          onClick={() => onClearAll()}
        />
        <Shell
          value="/"
          moreClass="bg-gray-700"
          onClick={() => onAddExp("/")}
        />
        <Shell
          value="*"
          moreClass="bg-gray-700"
          onClick={() => onAddExp("*")}
        />
        <Shell value="7" moreClass="bg-gray-700" onClick={() => onAddExp(7)} />
        <Shell value="8" moreClass="bg-gray-700" onClick={() => onAddExp(8)} />
        <Shell value="9" moreClass="bg-gray-700" onClick={() => onAddExp(9)} />
        <Shell
          value="-"
          moreClass="bg-gray-700"
          onClick={() => onAddExp("-")}
        />
        <Shell value="4" moreClass="bg-gray-700" onClick={() => onAddExp(4)} />
        <Shell value="5" moreClass="bg-gray-700" onClick={() => onAddExp(5)} />
        <Shell value="6" moreClass="bg-gray-700" onClick={() => onAddExp(6)} />
        <Shell
          value="+"
          moreClass="bg-gray-700"
          onClick={() => onAddExp("+")}
        />
        <Shell value="1" moreClass="bg-gray-700" onClick={() => onAddExp(1)} />
        <Shell value="2" moreClass="bg-gray-700" onClick={() => onAddExp(2)} />
        <Shell value="3" moreClass="bg-gray-700" onClick={() => onAddExp(3)} />
        <Shell
          noHeight
          value="="
          moreClass="bg-blue-700 row-span-2"
          onClick={() => onEval()}
        />

        <Shell
          value="0"
          moreClass="bg-gray-700 col-span-2"
          onClick={() => onAddExp(0)}
        />
        <Shell
          value="."
          moreClass="bg-gray-700"
          onClick={() => onAddExp(".")}
        />
      </div>
    </div>
  );
};

export default Caculator;
