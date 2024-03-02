import { useState } from "react";
import "./App.css";
import data from "../data";
import Questions from "./components/questions/Questions";

function App() {
  return (
    <main className="app">
      <h2 className="heading">Frequently Asked Questions</h2>
      <div className="questions-container">
        {data && data.map((obj) => <Questions key={obj.id} obj={obj} />)}
      </div>
    </main>
  );
}

export default App;
