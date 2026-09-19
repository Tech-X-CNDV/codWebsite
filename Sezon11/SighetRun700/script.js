const input = document.getElementById("folderInput");
const gallery = document.getElementById("gallery");

input.addEventListener("change", (e) => {
  gallery.innerHTML = ""; // clear old images if picked again

  const files = Array.from(e.target.files).filter(file =>
    file.type.startsWith("Galerie/image/")
  );

  files.forEach(file => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    gallery.appendChild(img);
  });
});