"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

interface Post {
  _id: string;
  id: string;
  title: string;
  imageUrl?: string;
  pdfUrl?: string;
  content: string;
  createdAt: string;
  registrationUrl?: string;
  customButtonLabel?: string;
  eventDate?: string;
  author: {
    name: string;
    email: string;
  };
}

const PostCard = ({ post }: { post: Post }) => {
  const today = new Date().toISOString().split("T")[0];
  const eventDay = post.eventDate?.split("T")[0];
  const isUpcoming = post.eventDate && eventDay >= today;

  return (
    <div className="bg-white rounded-xl border border-black/10 shadow-sm hover:shadow-lg transition flex flex-col overflow-hidden relative">
      {post.imageUrl && (
        <div className="relative h-52 w-full">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {isUpcoming && (
            <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Upcoming
            </span>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {post.title}
        </h2>

        {post.eventDate && (
          <p className="text-sm text-blue-600 font-medium mb-3">
            📅 {format(new Date(post.eventDate), "MMM d, yyyy")}
          </p>
        )}

        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {post.content}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {post.pdfUrl && (
            <a
              href={post.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              View PDF
            </a>
          )}

          {post.registrationUrl && (
            <a
              href={post.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              {post.customButtonLabel || "Register"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const PostsFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();

        if (response.ok) {
          const sorted = [...data.posts].sort(
            (a: Post, b: Post) =>
              new Date(b.createdAt.replace(" ", "T")).getTime() -
              new Date(a.createdAt.replace(" ", "T")).getTime(),
          );

          setPosts(sorted);
        } else {
          setError(data.error || "Failed to fetch posts");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
          Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id || post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsFeed;
