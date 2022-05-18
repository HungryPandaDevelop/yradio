let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: true
});

let owlDetail = $('.owl-detail-main');

owlDetail.owlCarousel({
  items: 1,
  nav: true,
  dots: true
});

let owlPartners = $('.owl-partners');

owlPartners.owlCarousel({
 
  autoplay: true,
  autoplayTimeout: 1001,
  smartSpeed: 500,
  loop: true,
  responsive:{
    576:{
      items:1
    },
    769:{
      items: 7,
    }
}
});

if($(window).width() < 767){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1
      },
      769:{
        items: 3,
      }
    }
  });
}
