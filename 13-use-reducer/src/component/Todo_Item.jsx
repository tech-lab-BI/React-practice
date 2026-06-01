import { useContext, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";

import ItemList from "../context/ItemList";

function Todo_Item() {

  let data = useContext(ItemList);
  // data{
  //   items : taskItems,
  //   handleNewItem : handleNewItem,
  //   handleDeleteButton : handleDeleteButton,
  // }

  return (
    <>
      {data.taskItems.map((task, index) => (
        <div className="row def-row" key={index}>
          <div className="col-6">{task.todoName}</div>
          <div className="col-4">{task.todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger"
              // onClick={() => data.handleDeleteButton(task.todoName)}
              onClick={() => data.dispatch({
                type: "DELETE",
                payload: {
                  itemName: task.todoName,
                }
              })}
            >
              <MdDeleteSweep />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todo_Item;
