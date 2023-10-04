var mySwiper = new Swiper('.swiper-container', {
    // Opciones de configuración
    slidesPerView: 1, // Mostrar una sola diapositiva a la vez
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  
   // Función para manejar el desplazamiento suave
   $(".scroll").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });