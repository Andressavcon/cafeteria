document.addEventListener('DOMContentLoaded', function (event) {
  event.preventDefault();

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

  const itemsMenu1 = document.getElementById('btn-menu1');
  const itemsMenu2 = document.getElementById('btn-menu2');
  const itemsMenu3 = document.getElementById('btn-menu3');

  function requestMenuItems(url) {
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = '';

    if (!document.getElementById('loading')) {
      const imgLoading = document.createElement('div');
      imgLoading.id = 'loading';
      document.getElementById('menu-items').appendChild(imgLoading);
    }

    let ajax = new XMLHttpRequest();
    ajax.open('GET', url);

    ajax.onreadystatechange = () => {
      if (ajax.readyState == 4 && ajax.status == 200) {
        document.getElementById('menu-items').innerHTML = ajax.responseText;
      }

      if (ajax.readyState == 4 && ajax.status == 404) {
        document.getElementById('menu-items').innerHTML =
          'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.';
      }
    };

    ajax.send();
  }

  itemsMenu1.addEventListener('click', function () {
    requestMenuItems('menu-1.html');
  });
  itemsMenu2.addEventListener('click', function () {
    requestMenuItems('menu-2.html');
  });
  itemsMenu3.addEventListener('click', function () {
    requestMenuItems('menu-3.html');
  });
});
