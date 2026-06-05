function BasicFunction({ setShowAddForm }) {
  return (
    <>
      <button type="button" class="btn btn-danger expense-function" onClick={()=>setShowAddForm("true")}>
        ADD expense
      </button>
      <button type="button" class="btn btn-info expense-function">
        Download as PDF
      </button>
    </>
  );
}
export default BasicFunction;
