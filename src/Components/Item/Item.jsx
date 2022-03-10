import React from "react";
import "./Item.css";

const Item = ({ task, deleteTask, i }) => {
  return (
    <div className="item">
      <h2>{task}</h2>
      <button className="Button" onClick={() => deleteTask(i)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
