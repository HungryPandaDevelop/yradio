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
  dots:  false,
  autoplay: true,
  autoplayTimeout: 1001,
  smartSpeed: 500,
  loop: true,
  responsive:{
    0:{
      items:2
    },
    769:{
      items: 7,
    }
}
});

if($(window).width() < 767){
  let owlTablet = $('.owl-tablet');

  owlTablet.owlCarousel({
    dots: true,
    margin: 15,
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

if($(window).width() < 567){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: true,
    items: 1,
    margin: 15
  });
}
