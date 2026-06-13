import { useContext, useRef, useEffect } from "react";
import { PostListContext } from "../store/PostList-store";
import { Form, redirect, useActionData } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostListContext);
  const formData = useActionData();

  useEffect(() => {
    console.log(formData);
    // addPost(formData);
  }, [formData]);
  // addPost not work because postList updated then getBulkPost call again. getBulkPost need to call once store in server 
  // for now we dont have server so everytime clickto "Home" we fetch postList updated.
  return (
    <>
      {/* <form className="post-create-form" onSubmit={handleSubmit}> */}
      <Form method="POST" className="post-create-form">
        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">
            Your User-ID
          </label>
          <input
            type="text"
            className="form-control"
            id="user-id"
            placeholder="Enter your user-id"
            name="userId"
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
            name="title"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea"
            name="body"
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
            name="reactions"
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
            name="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post my Content
        </button>
      </Form>
    </>
  );
}

export async function CreatePostAction({ request }) {
  const postData = await request.formData();

  const objData = Object.fromEntries(postData);
  objData.tags = objData.tags.split(" ");

  const response = await fetch(
    "https://dummyjson.com/posts/add",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(objData),
    }
  );
  return await response.json();
}

export default CreatePost;
