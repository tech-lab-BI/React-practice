import { MdDeleteSweep } from "react-icons/md";

function Todo_Item({ item , onDeleteButton}) {
  return (
    <>
      {item.map((data, index) => (
        <div className="row def-row" key={index}>
          <div className="col-6">{data.todoName}</div>
          <div className="col-4">{data.todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger"
              onClick={() => onDeleteButton(data.todoName)}
            >
              <MdDeleteSweep />
            </button>
          </div>
        </div>
      ))}
      {/* <div class="row def-row">
      <div class="col-6">{item.todoName}</div>
      <div class="col-4">{item.todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div> */}
    </>
  );
}

export default Todo_Item;
