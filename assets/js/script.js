document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-list').classList.toggle('active');
  });

  const gallery = document.getElementById('gallery');
  const galleryImagesContainer = gallery.querySelector('.gallery-images');
  const prevButton = gallery.querySelector('.prev-button');
  const nextButton = gallery.querySelector('.next-button');

  const totalImages = 10;
  const imagesPerPage = 5;
  let currentPage = 0;

  const showImages = () => {
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    for (let i = 0; i < galleryImagesContainer.children.length; i++) {
      galleryImagesContainer.children[i].style.display = 'none';
    }

    for (let i = startIndex; i < endIndex; i++) {
      if (i < galleryImagesContainer.children.length) {
        galleryImagesContainer.children[i].style.display = 'block';
      }
    }
  };

  const nextSlide = () => {
    if (currentPage < totalImages / imagesPerPage - 1) {
      currentPage++;
      showImages();
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      currentPage--;
      showImages();
    }
  };

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  showImages();
});
