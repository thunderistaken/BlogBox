import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createBlog = async (newBlog) => {
  const { data } = await API.post("/blogs", newBlog);
  console.log(data);
};

export const fetchBlogs = async () => API.get("/blogs");

export const deleteBlog = async (id) => await API.delete(`/blogs/${id}`);
export const updateBlog = async (id, updatedBlog) =>
  await API.put(`/blogs/${id}`, updatedBlog);
export const fetchBlog = async (id) => await API.get(`/blogs/${id}`);
