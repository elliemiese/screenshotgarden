const gallery = document.getElementById('gallery');

// Adjust totalImages to your max screenshots (optional)
const totalImages = 100;

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `screenshots/screenshot${i}.png`; // change extension if needed
  img.onerror = () => img.remove(); // remove broken images
  gallery.appendChild(img);
}