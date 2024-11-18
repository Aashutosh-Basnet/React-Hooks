import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0); // Initialize count to 0

  function DecrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function IncrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  const [divs, setDivs] = useState([]);

  function addDiv() {
    setDivs((prevDivs) => [
      ...prevDivs,
      { id: Date.now(), width: "20px", height: "20px", backgroundColor: "red" },
    ]);
  }

  function removeDiv() {
    setDivs((prevDivs) => prevDivs.slice(0, -1));
  }

  return (
    <div>
      <button onClick={DecrementCount}>-</button>
      <span>{count}</span>
      <button onClick={IncrementCount}>+</button>
      <br />
      <br />
      <button onClick={addDiv}>+</button>
      <button onClick={removeDiv}>-</button>

      <divs style={{ marginTop: "20px" }}>
        {divs.map((div) => (
          <div
            key={div.id}
            style={{
              width: div.width,
              height: div.height,
              backgroundColor: div.backgroundColor,
              marginBottom: "5px",
            }}
          ></div>
        ))}
      </divs>
    </div>
  );
}

export default UseState;
