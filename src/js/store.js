const STORAGE_KEY = "blogs";

// get data
export function loadBlogs() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// save data
export function saveBlogs(blogs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}
