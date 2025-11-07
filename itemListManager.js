//Problem statement :  https://www.hackerrank.com/challenges/item-list-manager/problem?isFullScreen=true

import { useState } from "react";
import "h8k-components";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddItem = () => {
    if (input.trim() === "") return;

    setItems((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <>
      <h8k-navbar header="Item List Manager"></h8k-navbar>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
