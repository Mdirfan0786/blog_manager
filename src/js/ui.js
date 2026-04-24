// src/js/ui.js
import { getBlogs, deleteBlog } from "./data.js";

export function renderBlogList(container) {
  container.innerHTML = "";

  getBlogs().forEach((blog) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="list_content">
        <h3>${blog.title}</h3>
        <div class="blog-body">
          ${marked.parse(blog.body)} 
        </div>
      </div>
      
      <div class="post_btns">
        <small>${blog.date}</small>
        <div>
            <button class="edit_btn" data-id="${blog.id}">Edit</button>
            <button class="delete-btn" data-id="${blog.id}">Delete</button>
        </div>
      </div>
    `;

    container.appendChild(li);
  });
}

export function bindDeleteEvents(container, onDelete) {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = parseInt(e.target.dataset.id);
      onDelete(id);
    }
  });
}

export function bindEditEvents(container, onEdit) {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit_btn")) {
      const id = parseInt(e.target.dataset.id);
      onEdit(id);
    }
  });
}
