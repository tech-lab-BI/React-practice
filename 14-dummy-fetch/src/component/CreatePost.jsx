import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostList-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);

  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const userIDElement = useRef();
  const tagsElement = useRef();
  // let notification = "off";

  function handleSubmit(event) {
    event.preventDefault();
    let id = Date.now().toString(36);
    let title = titleElement.current.value;
    let body = bodyElement.current.value;
    let reactions = reactionElement.current.value;
    let userID = userIDElement.current.value;
    let tags = tagsElement.current.value.split(" ");

    addPost(id, title, body, reactions, userID, tags);

    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    userIDElement.current.value = "";
    tagsElement.current.value = "";
  }

  return (
    <>
      <form className="post-create-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">
            Your User-ID
          </label>
          <input
            type="text"
            className="form-control"
            id="user-id"
            placeholder="Enter your user-id"
            ref={userIDElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your post title"
            ref={titleElement}
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea"
            ref={bodyElement}
          ></textarea>
          <label htmlFor="floatingTextarea">Description about your Post</label>
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            reaction Expected
          </label>
          <input
            type="number"
            className="form-control"
            id="reaction"
            placeholder="How many people react in your post"
            ref={reactionElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            placeholder="define some tag best fit with your post"
            ref={tagsElement}
          />
        </div>

        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="yes"
            onClick={() => {
              notification = "on"
            }}
          />
          <label className="form-check-label" htmlFor="yes">
            Yes
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            id="no"
            onClick={() => {
              notification = "on"
            }}
          />
          <label className="form-check-label" htmlFor="no">
            No
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Post my Content
        </button>
      </form>
    </>
  );
}
export default CreatePost;
