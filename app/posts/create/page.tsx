"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [registrationUrl, setRegistrationUrl] = useState("");
  const [customButtonLabel, setCustomButtonLabel] = useState(""); // ✅ Added state for custom button label
  const [eventDate, setEventDate] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else if (file) {
      setError("Please select a valid PDF file");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please login to create a post");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (registrationUrl) formData.append("registrationUrl", registrationUrl);
      if (customButtonLabel) formData.append("customButtonLabel", customButtonLabel); // ✅ Append custom button label
      if (eventDate) formData.append("eventDate", eventDate);
      if (imageFile) formData.append("image", imageFile);
      if (pdfFile) formData.append("pdf", pdfFile);

      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        router.push("/posts");
      } else {
        const data = await response.json();
        setError(data.error || "Failed to create post");
      }
    } catch {
      setError("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Create New Post
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Event Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Event Date (Optional)
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Post content"
              />
            </div>

            {/* Registration URL */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Registration / Join URL (Optional)
              </label>
              <input
                type="url"
                value={registrationUrl}
                onChange={(e) => setRegistrationUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Custom Button Label - ✅ Added Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Custom Button Label (Optional)
              </label>
              <input
                type="text"
                value={customButtonLabel}
                onChange={(e) => setCustomButtonLabel(e.target.value)}
                placeholder="e.g., Register Now, Join Me, Google Form"
                className="w-full px-3 py-2 border rounded-md"
              />
              <p className="text-xs text-gray-500">
                Defaults to "Register" if left blank.
              </p>
            </div>

            {/* Image */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>

            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full max-w-md h-48 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview("");
                  }}
                  className="mt-2 text-red-600 text-sm"
                >
                  Remove image
                </button>
              </div>
            )}

            {/* PDF */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                PDF Document
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handlePdfChange}
              />
            </div>

            {pdfFile && (
              <p className="text-sm text-gray-600">{pdfFile.name}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              {loading ? "Creating..." : "Create Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
