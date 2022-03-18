import React from "react";
import { useState } from "react";

const ActionItem = (props) => {
  const [strike, setStrike] = useState(false);

  const checkBoxHandler = (event) => {
    props.preventDefault();
    setStrike(props.check);
  };

  return (
    <div id="row">
      <h3
        onClick={props.clickAi}
        id={props.check ? "text-strike" : "text-norm"}
      >
        {props.text}
      </h3>
      <input
        type="checkbox"
        className="form-check-input"
        id="chk"
        checked={props.check}
        onClick={props.clickAi}
      />
      <button
        type="submit"
        id="del_button"
        value="Delete"
        className="btn btn-primary btn-lg d-block mx-auto my-2"
        onClick={props.deleteAi}
      >
        Delete
      </button>
    </div>
  );
};

export default ActionItem;
