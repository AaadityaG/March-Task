// src/app/components/PostItem.tsx
import { Post } from "@/types/post";
import Link from "next/link";

interface PostItemProps {
  post: Post;
  deletePost: (id: number) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, deletePost }) => {
  return (
    <div className="p-4 mb-2 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
      <div className="mt-4 flex space-x-2">
        <Link href={`/posts/${post.id}`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
        </Link>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
