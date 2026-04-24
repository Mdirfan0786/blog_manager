import { loadBlogs, saveBlogs } from "./store";

let blogs = loadBlogs();

export function getBlogs() {
  return blogs;
}

export function addBlog(blog) {
  blogs.unshift(blog);
  saveBlogs(blogs);
}

export function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
  saveBlogs(blogs);
}
