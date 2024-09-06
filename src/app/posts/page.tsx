// src/app/posts/page.tsx
"use client";

import { useState, useEffect } from "react";
import PostList from "@/app/components/PostList";
import PostForm from "@/app/components/PostForm";
import { Post } from "@/types/post";

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const savePostsToLocalStorage = (posts: Post[]) => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const addPost = (newPost: Post) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  return (
    <div className="p-8 bg-blue-300 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">CRUD App</h1>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <PostForm handleSubmit={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default PostsPage;
