import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [dateCount, setDateCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + dateCount);

  function dateIncrease() {
    setDateCount((dcount) => dcount + step);
  }

  function dateDecrease() {
    setDateCount((dcount) => dcount - step);
  }

  function handleReset() {
    setDateCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={dateDecrease}>-</button>
        <input
          type="text"
          value={dateCount}
          onChange={(e) => setDateCount(Number(e.target.value))}
        />
        <button onClick={dateIncrease}>+</button>
      </div>
      <p>
        <span>
          {dateCount === 0
            ? "Today is "
            : dateCount > 0
            ? `${dateCount} days from today is `
            : `${Math.abs(dateCount)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {dateCount !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
