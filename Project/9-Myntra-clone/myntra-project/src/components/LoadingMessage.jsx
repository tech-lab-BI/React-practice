function LoadingMessage() {
  return (
    <div className="d-flex justify-content-center loader">
      <button
        className="btn btn-primary"
        type="button"
        style={{ width: "200px", height: "200px" }}
      >
        <div
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
          style={{ width: "100px", height: "100px" }}
        ></div>
        <div role="status">Loading...</div>
      </button>
    </div>
  );
}
export default LoadingMessage;
