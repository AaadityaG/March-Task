// src/app/components/PostForm.tsx
import { Post } from "@/types/post";
import { useState, useEffect } from "react";

interface PostFormProps {
  post?: Post;
  handleSubmit: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, handleSubmit }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: post ? post.id : Date.now(),
      userId: 1,
      title,
      body,
    };
    handleSubmit(newPost);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 my-3">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700">
          Body
        </label>
        <textarea
          id="body"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {post ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default PostForm;
