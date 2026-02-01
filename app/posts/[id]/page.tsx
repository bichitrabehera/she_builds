'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IPost } from '@/models/post.model';

const PostDetail = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
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
      } else {
        setError('Post not found');
      }
    } catch (err) {
      setError('Error fetching post');
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

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to update a post');
        return;
      }

      const formData = new FormData();
      formData.append('title', editTitle);
      formData.append('content', editContent);
      if (editImageFile) {
        formData.append('image', editImageFile);
      }

      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
        setIsEditing(false);
        setEditImageFile(null);
        setImagePreview('');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to update post');
      }
    } catch (err) {
      setError('Error updating post');
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to delete a post');
        return;
      }

      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        router.push('/posts');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to delete post');
      }
    } catch (err) {
      setError('Error deleting post');
    }
  };

  if (loading) return <div className="flex justify-center p-8">Loading post...</div>;
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
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="edit-content" className="block text-sm font-medium text-gray-700 mb-2">
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
                <label htmlFor="edit-image" className="block text-sm font-medium text-gray-700 mb-2">
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
                      src={imagePreview || post.imageUrl || ''} 
                      alt="Preview" 
                      className="w-full max-w-md h-48 object-cover rounded-md"
                    />
                    {imagePreview && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditImageFile(null);
                          setImagePreview('');
                        }}
                        className="mt-2 text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove new image
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={updateLoading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
                >
                  {updateLoading ? 'Updating...' : 'Update Post'}
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditImageFile(null);
                    setImagePreview('');
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
                <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
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
                <p>By {post.author?.name || 'Unknown'}</p>
                <p className="text-sm">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <button
            onClick={() => router.push('/posts')}
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
