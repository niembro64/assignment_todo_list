import React from "react";
import { useState } from "react";

const ActionItem = (props) => {
  const [strike, setStrike] = useState(false);

  const checkBoxHandler = (event) => {
      setStrike(!strike);

  };

  return (
    <form id="row">
      <h1>{strike}</h1>
      <input id={strike ? "text-strike" : "text-norm"} type="text" value={props.text} />
      <input
        type="checkbox"
        className="form-check-input"
        onChange={checkBoxHandler}
      />
      <h1>{props.check ? "X" : "O"}</h1>
      <button className="btn btn-primary mx-4" type="submit">
        Delete
      </button>
    </form>
  );
};

export default ActionItem;
