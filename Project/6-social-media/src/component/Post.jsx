import { MdDeleteSweep } from "react-icons/md";
import { PostListContext } from "../store/PostList-store";
import { useContext } from "react";

function Post({ post }) {
  const { deletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card post-card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteSweep size={20} />
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-secondary post-tag">
              {tag}
            </span>
          ))}
          <br />
          <span className="badge text-bg-light">
            {post.reaction} people react on your post
          </span>
        </div>
      </div>
    </>
  );
}
export default Post;
