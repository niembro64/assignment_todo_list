import "bootstrap/dist/css/bootstrap.min.css";
import reactRouterDom from "react-router-dom";
import "./App.css";
import ActionItem from "./components/ActionItem";
import { useState } from "react";

function App() {
  const [ai, setAi] = useState([
    "ai1",
    "ai2",
    "ai3",
    "ai4",
    "ai5",
    "ai6",
    "ai7",
  ]);

  return (
    <div className="App">
      <h1 id="title">To-Do List</h1>
      <div id="add">
        <form>
          <input type="text" />
          <button className="btn btn-primary mx-4" type="submit">
            Add
          </button>
        </form>
      </div>
      <div id="list">
        {ai.map((item, i) => {
          return <ActionItem key={i} name={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
