import { PostListContext } from "../store/PostList-store";

function EmptyPost() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">No post Yet </h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="lead mb-4">
            There is no post , you may choose to get post from server for click
            below button
          </p>{" "}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
export default EmptyPost;
