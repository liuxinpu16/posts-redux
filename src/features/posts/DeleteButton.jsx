import { useDispatch } from "react-redux";
import { postDelete } from "./postsSlice";

// eslint-disable-next-line react/prop-types
const DeleteButton = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(postDelete({ postId: post.id }))}
    >
      Delete Post
    </button>
  );
};

export default DeleteButton;
