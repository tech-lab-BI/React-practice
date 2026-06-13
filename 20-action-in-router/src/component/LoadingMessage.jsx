function LoadingMessage() {
  return (
    <div class="d-flex justify-content-center" >
      <button class="btn btn-primary" type="button" style={{width: "200px", height: "200px"}}>
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
          style={{width: "100px", height: "100px"}}
        ></span>
        <span role="status">Loading...</span>
      </button>
    </div>
  );
}
export default LoadingMessage;
