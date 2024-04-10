const swiper = new Swiper('.analysis-slider', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },   
  spaceBetween: 25,
     autoplay: {
           delay: 2000,
     },
     
    breakpoints: {
    
    350: {
      spaceBetween: 40
    },
   
    480: {
      spaceBetween: 50
    },
   
    640: {
      spaceBetween: 90
         },
    
    1024: {
      spaceBetween: 140
    }
  }
})