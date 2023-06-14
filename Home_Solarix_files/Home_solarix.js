var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 8000, // Cambiar de imagen cada 8 segundos
    },
  });

  
  document.getElementById("mostrarImagen").addEventListener("click", function() {
  document.getElementById("imagenOculta").src = "ruta-de-la-imagen.jpg";
});

function showContent(index) {
    var images = document.getElementsByClassName('image');
    var lists = document.getElementsByClassName('list');
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
      lists[i].classList.remove('active');
    }
  
    var image = document.getElementById('image' + index);
    var list = document.getElementById('list' + index);
    image.classList.add('active');
    list.classList.add('active');
  }
  
