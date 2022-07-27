let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: true,
  dots: true,

});

let owlGallery = $('.owl-gallery');

owlGallery.owlCarousel({

  responsive:{

    0:{
      items: 1,
      nav: false,
      dots: true,
      padding: 15,
      margin: 15,
      stagePadding: 0
    },
    576:{
      items: 1,
      nav: false,
      dots: true,
      padding: 15,
      margin: 15,
      stagePadding: 75
    },
    769:{
      items: 3,
      nav: false,
      dots: true,
      padding: 15,
      margin: 15,
    }
  }
});

let owlDetail = $('.owl-detail-main');

owlDetail.owlCarousel({
  items: 1,
  nav: true,
  dots: true
});

let owlAboutTeam = $('.owl-about-team');

owlAboutTeam.owlCarousel({
  items: 1,
  nav: false,
  dots: true
});
let owlreviews = $('.reviews-owl');

owlreviews.owlCarousel({
  items: 1,
  nav: false,
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

if($(window).width() < 769){
  let owlTablet = $('.owl-tablet');

  owlTablet.owlCarousel({
    
    responsive:{
      0:{
        items:1,
        dots: true,
        margin: 15
      },
      576:{
        items:2,
        dots: true,
        margin: 15
      },
      767:{
        items: 3,
        margin: 15
      }
    }
  });
}
if($(window).width() < 769){
  let owlTabletS = $('.owl-tabletS'); 

  owlTabletS.owlCarousel({
    
    responsive:{
      0:{
        items:1,
        dots: true,
        margin: 15
      },

      767:{
        items: 2,
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

  let owlDetailBottom = $('.catalog-detail-owl');

  owlDetailBottom.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      576:{
        items: 3,
        margin: 15
      },
      998:
      {
        items: 4,
        margin: 15
      }
    }
  });


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
