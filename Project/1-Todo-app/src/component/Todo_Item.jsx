function Todo_Item({item}) {
  return (<>
    {item.map((data)=><div class="row def-row">
      <div class="col-6">{data.todoName}</div>
      <div class="col-4">{data.todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>)}
    {/* <div class="row def-row">
      <div class="col-6">{item.todoName}</div>
      <div class="col-4">{item.todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div> */}
  </>);
}

export default Todo_Item;
