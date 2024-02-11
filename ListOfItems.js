import React from "react";

const ListOfItems = () => {
  const todolist = ["mrng Class", "practise Js problems","practise todays class"];
  return (
    <div>
      <h1>ToDo List</h1>
      {todolist.length > 0 ? (
        <ul>
          {todolist.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
      ) : (
        <h1>No Items</h1>
      )}
    </div>
  );
};
export default ListOfItems;
