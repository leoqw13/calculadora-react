import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", ".", "**", "**2", "**3", "**(1/", "!"];
  const updateCalc = (value) => {
    const π = Math.PI.toString();
    const e = Math.E.toString();

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const setAns = () => {
    if (calc == "") {
      return;
    }
    setCalc(calc + result);
  };
  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const deleteAll = () => {
    const value = "";
    setCalc(value);
    setResult(value);
  };

  const factor = () => {
    if (calc === "") {
      return;
    }
    var n = calc;
    for (let i = n - 1; i >= 1; i--) {
      n *= i;
    }
    setCalc(calc + "!");
    setResult(n);
  };

  return (
    <div className="App">
      <div class="contenedor">
        <h1>CASIO</h1>

        <div class="calculator" name="calculator">
          <div class="display">
            {calc || "0"}
            {result ? <div> ({result}) </div> : ""}
          </div>

          <span onClick={() => updateCalc("(")}>
            <i>(</i>
          </span>

          <span onClick={() => updateCalc(")")}>
            <i>)</i>
          </span>

          <span onClick={factor}>
            <i>x!</i>
          </span>

          <span onClick={() => updateCalc("**2")}>
            <i>x²</i>
          </span>
          <span onClick={() => updateCalc("Math.sqrt(")}>
            <i>√</i>
          </span>

          <span onClick={() => updateCalc("**(1/")}>
            <i>n√</i>
          </span>
          <span onClick={() => updateCalc("Math.sin(")}>
            <i>Sin</i>
          </span>

          <span onClick={() => updateCalc("Math.cos(")}>
            <i>Cos</i>
          </span>

          <span onClick={() => updateCalc("Math.tan(")}>
            <i>Tan</i>
          </span>

          <span onClick={() => updateCalc("**3")}>
            <i>x³</i>
          </span>
          <span onClick={() => updateCalc("Math.cbrt(")}>
            <i>³√</i>
          </span>

          <span onClick={() => updateCalc("**")}>
            <i>xⁿ</i>
          </span>

          <span class="digit" onClick={() => updateCalc("1")}>
            <i>1</i>
          </span>
          <span class=" digit" onClick={() => updateCalc("2")}>
            <i>2</i>
          </span>
          <span class="digit" onClick={() => updateCalc("3")}>
            <i>3</i>
          </span>

          <span onClick={() => updateCalc("/")}>
            <i>/</i>
          </span>
          <span onClick={() => updateCalc("/100")}>
            <i>%</i>
          </span>
          <span onClick={() => updateCalc("Math.log(")}>
            <i> ln</i>
          </span>
          <span class="digit" onClick={() => updateCalc("4")}>
            <i>4</i>
          </span>
          <span class="digit" onClick={() => updateCalc("5")}>
            <i>5</i>
          </span>
          <span class="digit" onClick={() => updateCalc("6")}>
            <i>6</i>
          </span>

          <span onClick={() => updateCalc("*")}>
            <i>*</i>
          </span>

          <span onClick={setAns}>
            <i>Ans</i>
          </span>

          <span onClick={() => updateCalc("e")}>
            <i>e</i>
          </span>

          <span class="digit" onClick={() => updateCalc("7")}>
            <i>7</i>
          </span>
          <span class="digit" onClick={() => updateCalc("8")}>
            <i>8</i>
          </span>
          <span class="digit" onClick={() => updateCalc("9")}>
            <i>9</i>
          </span>
          <span onClick={() => updateCalc("-")}>
            <i>-</i>
          </span>

          <span class="delete" onClick={deleteLast}>
            <i>DEL</i>
          </span>
          <span class="equal" onClick={calculate}>
            <i>=</i>
          </span>

          <span onClick={() => updateCalc(".")}>
            <i>.</i>
          </span>

          <span class=" digit" onClick={() => updateCalc("0")}>
            <i>0</i>
          </span>

          <span onClick={() => updateCalc("π")}>
            <i>π</i>
          </span>

          <span onClick={() => updateCalc("+")}>
            <i>+</i>
          </span>

          <span class="delete" onClick={deleteAll}>
            <i>C</i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
