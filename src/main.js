// src/main.js

import { addBlog, deleteBlog, updateBlog, getBlogs } from "./js/data.js";

import { renderBlogList, bindDeleteEvents, bindEditEvents } from "./js/ui.js";
import { getFormattedDate } from "./utils/date.js";

const form = document.getElementById("blog-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const blogList = document.getElementById("blog-list");

// editing state
let editingId = null;

// Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) return;

  if (editingId) {
    const blogs = getBlogs();
    const oldBlog = blogs.find((b) => b.id === editingId);
    const oldDate = oldBlog.date;
    console.log(oldDate);

    updateBlog({
      id: editingId,
      title,
      body,
      date: oldDate,
    });
    editingId = null;
  } else {
    const newBlog = {
      id: Date.now(),
      title,
      body,
      date: getFormattedDate(),
    };
    addBlog(newBlog);
  }

  renderBlogList(blogList);
  form.reset();
});

// Delete
bindDeleteEvents(blogList, (id) => {
  deleteBlog(id);
  renderBlogList(blogList);
});

// Edit
bindEditEvents(blogList, (id) => {
  const blogs = getBlogs();
  const blogToEdit = blogs.find((b) => b.id === id);

  if (!blogToEdit) return;

  titleInput.value = blogToEdit.title;
  bodyInput.value = blogToEdit.body;

  editingId = id;
});

//initial Render
renderBlogList(blogList);
