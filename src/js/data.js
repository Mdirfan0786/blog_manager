import { loadBlogs, saveBlogs } from "./store";

let blogs = loadBlogs();

// get post
export function getBlogs() {
  return blogs;
}

// add post
export function addBlog(blog) {
  blogs.unshift(blog);
  saveBlogs(blogs);
}

// delete post
export function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
  saveBlogs(blogs);
}

// edit post
export function updateBlog(updatedBlog) {
  blogs = blogs.map((blog) =>
    blog.id === updatedBlog.id ? updatedBlog : blog,
  );
  saveBlogs(blogs);
}
