let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: true,

});

let owlGallery = $('.owl-gallery');

owlGallery.owlCarousel({
  items: 3,
  nav: false,
  dots: true,
  padding: 15,
  margin: 15
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
    567:{
      items: 4,
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
    margin: 0,
    responsive:{
      0:{
        items:1
      },
      380:{
        items: 2,
        margin: 15
      },
      576:{
        items: 3,
        margin: 15
      }
    }
  });
}

if($(window).width() < 576){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      415:{
        items: 2,
        margin: 15
      }
    }
  });
}

if($(window).width() < 567){
  let owlBanners = $('.owl-banners');

  owlBanners.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1,
        margin: 15

      }
    }
  });
}
