import { useContext } from "react";
import { PostListContext } from "../store/PostList-store";

function EmptyPost() {
  const { getBulkPost } = useContext(PostListContext);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">No post Yet </h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="lead mb-4">
            There is no post , you may choose to get post from server
          </p>{" "}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => getBulkPost()}
            >
              Get Post
            </button>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
export default EmptyPost;
