// src/app/components/PostList.tsx
import { Post } from "@/types/post";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
  deletePost: (id: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostItem key={post.id} post={post} deletePost={deletePost} />
        ))
      ) : (
        <p className="mt-8 text-center">No posts available</p>
      )}
    </div>
  );
};

export default PostList;
