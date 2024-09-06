// src/app/posts/[id].tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import PostForm from "@/app/components/PostForm";

const EditPostPage = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();
  const postId = parseInt(params.id, 10);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      const posts: Post[] = JSON.parse(storedPosts);
      const foundPost = posts.find((p) => p.id === postId);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [postId]);

  const updatePost = (updatedPost: Post) => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      const posts: Post[] = JSON.parse(storedPosts);
      const updatedPosts = posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      router.push("/posts");
    }
  };

  return (
    <div className="p-8">
      {post ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
          <PostForm post={post} handleSubmit={updatePost} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPostPage;
