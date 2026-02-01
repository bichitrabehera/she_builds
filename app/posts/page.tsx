"use client";

import { useState, useEffect } from "react";
import { IPost } from "@/models/post.model";
import Link from "next/link";

const PostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        setError("Failed to fetch posts");
      }
    } catch {
      setError("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <div className="flex justify-center p-8">Loading posts...</div>;
  if (error) return <div className="text-red-500 p-8">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Posts</h1>

          <Link
            href="/posts/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Post
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts yet.</p>
            <Link
              href="/posts/create"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              Create the first post
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.registrationUrl && (
                      <a
                        href={post.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full hover:bg-green-200 transition-colors"
                      >
                        Register →
                      </a>
                    )}

                    {post.pdfUrl && (
                      <button
                        onClick={() =>
                          window.open(
                            `/api/pdf?url=${encodeURIComponent(post.pdfUrl)}`,
                            "_blank",
                          )
                        }
                        className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full hover:bg-red-200 transition-colors"
                      >
                        PDF ↓
                      </button>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <div>By {post.author?.name || "Unknown"}</div>
                      <div>{new Date(post.createdAt).toLocaleDateString()}</div>
                    </div>

                    <Link
                      href={`/posts/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsList;
