import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    console.log(event.target.value);
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input
        onChange={handleChange}
        type="text"
        value={name}
        placeholder="What's your name?"
      />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
