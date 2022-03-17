import "bootstrap/dist/css/bootstrap.min.css";
import reactRouterDom from "react-router-dom";
import "./App.css";
import ActionItem from "./components/ActionItem";
import { useState } from "react";

function App() {
  const [ai, setAi] = useState([
    { text: "Get MERN BlackBelt", check: false },
    { text: "Spank my GF", check: true },
    { text: "Buy a Monkey", check: false },
  ]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(event);

    const newState = [...ai, { text: form, check: true }]; 
    // text: form.target.value, check: false

    setAi(newState);
    setForm("");
  };

  const deleteAi = (index) => {
    console.log(index);
  };

  return (
    <div className="App">
      <h1 id="title">To-Do List</h1>
      <div id="add">
        <form onSubmit={onSubmitHandler}>
          <input
            value={form}
            id="text"
            type="text"
            onChange={(event) => {
              setForm(event.target.value);
            }}
            placeholder="Type New Action Item"
          />
          <input
            type="submit"
            value="Add"
            className="btn btn-primary btn-lg d-block mx-auto my-2"
          />
        </form>
      </div>
      <div id="list">
        {ai.map((item, i) => {
          return (
            <ActionItem
              deleteAi={() => {
                deleteAi(i);
              }}
              index={i}
              key={i}
              text={item.text}
              check={item.check}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
