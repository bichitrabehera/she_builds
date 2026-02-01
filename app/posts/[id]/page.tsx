"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { IPost } from "@/models/post.model";

const PostDetail = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editRegistrationUrl, setEditRegistrationUrl] = useState("");
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [editPdfFile, setEditPdfFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [updateLoading, setUpdateLoading] = useState(false);

  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
        setEditTitle(data.post.title);
        setEditContent(data.post.content);
        setEditRegistrationUrl(data.post.registrationUrl || "");
      } else {
        setError("Post not found");
      }
    } catch (err) {
      setError("Error fetching post");
    } finally {
      setLoading(false);
    }
  };

  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setEditImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePdfDownload = async (pdfUrl: string, filename: string) => {
    try {
      // Use our proxy API to download the PDF
      const proxyUrl = `/api/pdf?url=${encodeURIComponent(pdfUrl)}`;

      // Create a download link and trigger download
      const link = document.createElement("a");
      link.href = proxyUrl;
      link.download = `${filename}.pdf`;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // Fallback to opening in new tab
      window.open(pdfUrl, "_blank");
    }
  };

  const handleEditPdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setEditPdfFile(file);
    } else if (file) {
      setError("Please select a valid PDF file");
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please login to update a post");
        return;
      }

      const formData = new FormData();
      formData.append("title", editTitle);
      formData.append("content", editContent);
      if (editRegistrationUrl) {
        formData.append("registrationUrl", editRegistrationUrl);
      }
      if (editImageFile) {
        formData.append("image", editImageFile);
      }
      if (editPdfFile) {
        formData.append("pdf", editPdfFile);
      }

      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
        setIsEditing(false);
        setEditImageFile(null);
        setImagePreview("");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to update post");
      }
    } catch (err) {
      setError("Error updating post");
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please login to delete a post");
        return;
      }

      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        router.push("/posts");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to delete post");
      }
    } catch (err) {
      setError("Error deleting post");
    }
  };

  if (loading)
    return <div className="flex justify-center p-8">Loading post...</div>;
  if (error) return <div className="text-red-500 p-8">{error}</div>;
  if (!post) return <div className="text-center p-8">Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {isEditing ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Post</h1>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label
                  htmlFor="edit-title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="edit-title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="edit-content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Content
                </label>
                <textarea
                  id="edit-content"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  required
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="edit-registrationUrl"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Registration Link (Optional)
                </label>
                <input
                  type="url"
                  id="edit-registrationUrl"
                  value={editRegistrationUrl}
                  onChange={(e) => setEditRegistrationUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/register"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Add a registration link for events or sign-ups
                </p>
              </div>

              <div>
                <label
                  htmlFor="edit-image"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  New Image (Optional)
                </label>
                <input
                  type="file"
                  id="edit-image"
                  accept="image/*"
                  onChange={handleEditImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {(imagePreview || post.imageUrl) && (
                  <div className="mt-4">
                    <img
                      src={imagePreview || post.imageUrl || ""}
                      alt="Preview"
                      className="w-full max-w-md h-48 object-cover rounded-md"
                    />
                    {imagePreview && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditImageFile(null);
                          setImagePreview("");
                        }}
                        className="mt-2 text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove new image
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="edit-pdf"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  New PDF Document (Optional)
                </label>
                <input
                  type="file"
                  id="edit-pdf"
                  accept="application/pdf"
                  onChange={handleEditPdfChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                {editPdfFile && (
                  <div className="mt-2 flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-red-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">
                        {editPdfFile.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEditPdfFile(null)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {post.pdfUrl && !editPdfFile && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-red-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">
                          Current PDF uploaded
                        </span>
                      </div>
                      <a
                        href={post.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        View
                      </a>
                    </div>
                  </div>
                )}

                <p className="mt-1 text-sm text-gray-500">
                  Upload a new PDF document to replace the existing one
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={updateLoading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
                >
                  {updateLoading ? "Updating..." : "Update Post"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditImageFile(null);
                    setImagePreview("");
                  }}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
            )}

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {post.title}
                </h1>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="text-gray-600 mb-6">
                <p>By {post.author?.name || "Unknown"}</p>
                <p className="text-sm">
                  Posted on {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>

              {post.registrationUrl && (
                <div className="mb-6">
                  <a
                    href={post.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Register for Event →
                  </a>
                </div>
              )}

              <div className="prose max-w-none">
                <p className="text-gray-800 whitespace-pre-wrap">
                  {post.content}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                {post.pdfUrl && (
                  <button
                    onClick={() =>
                      handlePdfDownload(
                        post.pdfUrl!,
                        post.title.replace(/[^a-z0-9]/gi, "_").toLowerCase(),
                      )
                    }
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={() => router.push("/posts")}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            ← Back to Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
