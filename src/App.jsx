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

    // console.log(event);

    const newState = [...ai, { text: form, check: false }];
    // text: form.target.value, check: false

    setAi(newState);
    setForm("");
  };

  const deleteAi = (index) => {
    console.log(index);
    console.log(ai[index]);
    console.log(ai[index].text);

    const newState = [...ai];
    const newState2 = [];
    for (var i = 0; i < newState.length; i++) {
      if (i != index) {
        newState2.push({ text: ai[i].text, check: ai[i].check });
      }
    }
    setAi(newState2);
  };

  const clickAi = (index) => {
    console.log(index);
    console.log(ai[index]);
    console.log(ai[index].text);

    const newState = [...ai];
    newState[index] = {
      text: ai[index].text,
      check: ai[index].check ? false : true,
    };
    setAi(newState);
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
              clickAi={() => {
                clickAi(i);
              }}
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
