import React from "react";
import { useState } from "react";

const ActionItem = (props) => {
  const [strike, setStrike] = useState(false);

  const checkBoxHandler = (event) => {
    setStrike(!strike);
  };

  return (
    <div id="row">
      <input
        id={strike ? "text-strike" : "text-norm"}
        type="text"
        value={props.text}
      />
      <input
        type="checkbox"
        className="form-check-input"
        onChange={checkBoxHandler}
        id="chk"
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
