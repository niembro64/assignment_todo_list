import React from "react";
import { useState } from "react";

const ActionItem = (props) => {
    const [a, setA] = useState("START")


const checkBoxHandler = (event) => {
    setA("END")
}

  return (
    <form id="row">
        <h1>{a}</h1>
      <input type="text" id="textbox" value={props.text} />
      <input type="checkbox" className="form-check-input" onChange={checkBoxHandler}/>
      <h1>{props.check ? "X" : "O"}</h1>
      <button className="btn btn-primary mx-4" type="submit">
        Delete
      </button>
    </form>
  );
};

export default ActionItem;
