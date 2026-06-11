function LoadingMessage() {
  return (
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" type="button">
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </div>
  );
}
export default LoadingMessage;
