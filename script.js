fetch('screenshots/')
  .then(response => response.text())
  .then(html => {
    const gallery = document.getElementById('gallery');
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const links = doc.querySelectorAll('a');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
        const img = document.createElement('img');
        img.src = `screenshots/${href}`;
        gallery.appendChild(img);
      }
    });
  });