const API_BASE = process.env.NODE_ENV === 'production' ? '' : '';

export const api = {
  // Auth endpoints
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  register: async (name: string, email: string, password: string) => {
    const response = await fetch(`${API_BASE}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    return response.json();
  },

  // Posts endpoints
  getPosts: async () => {
    const response = await fetch(`${API_BASE}/api/posts`);
    return response.json();
  },

  getPost: async (id: string) => {
    const response = await fetch(`${API_BASE}/api/posts/${id}`);
    return response.json();
  },

  createPost: async (formData: FormData, token: string) => {
    const response = await fetch(`${API_BASE}/api/posts`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData,
    });
    return response.json();
  },

  updatePost: async (id: string, formData: FormData, token: string) => {
    const response = await fetch(`${API_BASE}/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData,
    });
    return response.json();
  },

  deletePost: async (id: string, token: string) => {
    const response = await fetch(`${API_BASE}/api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    return response.json();
  },

  // Test upload endpoint
  testUpload: async (formData: FormData) => {
    const response = await fetch(`${API_BASE}/api/test-upload`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },
};

export const auth = {
  getToken: () => localStorage.getItem('token'),
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  isAuthenticated: () => !!localStorage.getItem('token'),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};
