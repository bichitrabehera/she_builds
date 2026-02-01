"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
  _id: string;
  title: string;
  imageUrl?: string;
  content: string;
  createdAt: string;
}

export default function PostsFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data: { posts: Post[] } = await response.json();
      setPosts(data.posts);
    } catch (err) {
      setError("Something went wrong while fetching posts.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500 font-medium">{error}</div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        All Posts
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts available.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white w-100 rounded border border-black/20 overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* IMAGE */}
              {post.imageUrl && (
                <div className="relative h-70 w-full overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.content}
                </p>

                {/* <time
                  className="text-xs text-gray-400"
                  suppressHydrationWarning
                >
                  {new Date(post.createdAt).toDateString()}
                </time> */}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
