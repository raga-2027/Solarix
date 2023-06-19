window.addEventListener('DOMContentLoaded', function() {
  var gallerySlider = document.querySelector('.gallery-slider');

  function changeSlide() {
    var slideWidth = document.querySelector('.gallery-slide').offsetWidth;
    gallerySlider.style.transform = 'translateX(-' + slideWidth + 'px)';
    setTimeout(function() {
      gallerySlider.appendChild(gallerySlider.firstElementChild);
      gallerySlider.style.transform = 'translateX(0)';
    }, 500);
  }

  setInterval(changeSlide, 4000);
});




window.addEventListener('DOMContentLoaded', function() {
  showContent(1); // Mostrar contenido inicialmente
});

function showContent(contentId) {
  // Ocultar todas las imágenes y listas
  var images = document.getElementsByClassName('image');
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  
  var lists = document.getElementsByClassName('list');
  for (var j = 0; j < lists.length; j++) {
    lists[j].style.display = 'none';
  }
  
  // Mostrar la imagen y lista correspondientes al botón seleccionado
  var selectedImage = document.getElementById('image' + contentId);
  var selectedList = document.getElementById('list' + contentId);
  
  if (selectedImage && selectedList) {
    selectedImage.style.display = 'block';
    selectedList.style.display = 'block';
  }
}

const listItems = document.querySelectorAll('.text-option');
const contentParagraphs = document.querySelectorAll('.selected-content p');
const listContainer = document.querySelector('.container');
const originalList = listContainer.innerHTML;
let selectedLiIndex = -1;

listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (selectedLiIndex !== index) {
      selectedLiIndex = index;
      listItems.forEach((li) => {
        if (li !== item) {
          li.style.display = 'none';
        }
      });
      contentParagraphs.forEach((p) => p.classList.remove('show'));

      item.style.display = 'block';
      contentParagraphs[index].classList.add('show');
    }
  });
});

contentParagraphs.forEach((p) => {
  p.addEventListener('click', () => {
    listItems.forEach((li) => {
      li.style.display = 'block';
    });
    contentParagraphs.forEach((p) => p.classList.remove('show'));

    selectedLiIndex = -1;
  });
});

window.addEventListener('resize', () => {
  if (selectedLiIndex !== -1) {
    listContainer.style.height = `${listContainer.offsetHeight}px`;
  }
});


function toggleMenu() {
  var menuWrapper = document.querySelector('.menu_wrapper');
  menuWrapper.style.display = menuWrapper.style.display === 'none' ? 'flex' : 'none';
}

