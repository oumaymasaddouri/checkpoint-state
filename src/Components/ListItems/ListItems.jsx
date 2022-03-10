import React from "react";
import Item from "../Item/Item";
const ListItems = ({ list, deleteTask }) => {
  return (
    <div>
      {list.map((task, i) => (
        <Item task={task} key={i} deleteTask={deleteTask} i={i} />
      ))}
    </div>
  );
};

export default ListItems;
