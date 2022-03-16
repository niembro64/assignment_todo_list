import "bootstrap/dist/css/bootstrap.min.css";
import reactRouterDom from "react-router-dom";
import "./App.css";
import ActionItem from "./components/ActionItem";
import { useState } from "react";

function App() {
  const [ai, setAi] = useState([
    { text: "asdf0", check: false },
    { text: "asdf1", check: true },
    { text: "asdf2", check: true },
    { text: "asdf3", check: false },
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
          return <ActionItem key={i} text={item.text} check={item.check}/>;
        })}
      </div>
    </div>
  );
}

export default App;
