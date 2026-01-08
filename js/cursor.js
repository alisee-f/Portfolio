const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Effet hover sur liens
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});
