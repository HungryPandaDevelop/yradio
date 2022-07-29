

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
  $('.selection-item--extra').remove();
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

// img cover start
$('.img-cover').each(function(){
  let imgSrc = $(this).find('img').attr('src');
  //console.log(imgSrc);
  
  $(this).css('background-image', 'url('+imgSrc+')');
});
// img cover file start
 // style input file start

let ObjfieldFile = $('.input-file');
let flagFileMulti;
let textChoise;
let sizeFile;
let nameFile;

function createNewFileContainer(textChoiseParam, flagFileMultiParam, hintParam){
		let fileContainer = $('<div class="file-input-container"><input class="input-file" type="file" data-flagM="'+flagFileMultiParam+'"></div>')
		let noticeFile = $('<div class="notice-file notice-big-file"><span>Файл слишком большой</span><i></i></div>');
		let docorateFile = $('<div class="file-decorate"><span>'+textChoiseParam+'</span><i></i></div>');
		if(hintParam){
				let hintFile = $('<div class="hint-input-file">'+hintParam+'</div>');
				return fileContainer.append(hintFile).append(docorateFile).append(noticeFile);
		}
		else{
				return fileContainer.append(docorateFile).append(noticeFile);
		}
}

ObjfieldFile.each(function(){
		let appendFlag = 0;
		textChoise = $(this).data('textchoise');
		flagFileMulti = $(this).data('multy');
		textHint = $(this).data('hint');

		$(this).replaceWith(createNewFileContainer(textChoise, flagFileMulti, textHint));

});



$('body').on('click', '.file-decorate', function () {
		console.log('cl');
		let container = $(this).parents('.file-input-container');
		container.find('.input-file').trigger('click');
});

$('body').on('change', '.input-file', function () {
		nameFile = $(this).val().replace(/C:\\fakepath\\/i, '');
		let container = $(this).parents('.file-input-container');
		
		if(nameFile.length>0){
				sizeFile = this.files[0].size;
				if(sizeFile < 500000){
						console.log(nameFile,sizeFile);
						container.find('span').text(nameFile);
						container.addClass('full');

						flagFileMulti = $(this).data('flagm');

						if (flagFileMulti == 1) {
								$(this).parents('.file-input-container').after(createNewFileContainer(textChoise,"1"));
						}
				}
				else{
						console.log('to big');
					$(this).parents('.file-input-container').find('.notice-big-file').addClass('notice-file--show');

					setTimeout(function(){
						$('.notice-big-file').removeClass('notice-file--show');
					},3000);
				}
		}
});

$("body").on("click", ".file-decorate i", function (e) {
		e.stopPropagation();
		flagFileMulti = $(this).data('flagm');
		let container = $(this).parents('.file-input-container');
		if (flagFileMulti == 1) {
				container.remove();
		}
		else{
				container.replaceWith(createNewFileContainer(textChoise,"0"));
		}
});
 // style input file end
// custom-select

$('.style-select').each(function () {
  let firstElOption = $(this).find('option:selected').text();
  let dataText = $(this).data('text');
  let dataClass = $(this).data('class');
  let dataRedirect = $(this).data('redirect') && 'select-redirect';

  $(this).find('option').each(function(index){
    $(this).attr('data-index',index);
  });
  if(dataText){
      firstElOption = dataText;
  }


  let styleSelectBoxElement = 
    $(`<div class='custom-select ${dataClass} ${dataRedirect}'>
        <span>${firstElOption}</span>
        <i></i>
        <ul class='ln'></ul>
        
      </div>
    `);

  $(this).before(styleSelectBoxElement).hide();

  $(this).find('option').each(function (index) {
      var optionText = $(this).text();
      $(this).parent().prev().find('ul').append('<li data-value="'+$(this).val()+'" data-index="'+index+'">' + optionText + '</li>');
  });
});

$(".custom-select").on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
  } else {
      $('.custom-select').removeClass('active');
      $(this).addClass('active');
  }
});

$('body').on('click', function (evt) {
  if (!$(evt.target).is('.custom-select, .custom-select > *')) {
      $('.custom-select').removeClass('active');
  }
});

let tempSelectVal;
$('.custom-select').on('click', 'li', function () {
  let liIndex = $(this).data('index');
  let parentsEl = $(this).parents('.custom-select');

  if(!tempSelectVal){   
    tempSelectVal = $(this).remove();
  }else{
    $(this).after(tempSelectVal);
    tempSelectVal = $(this).remove();
  }
  
  parentsEl.next().find('option[data-index="'+liIndex+'"]').prop('selected', true);

  parentsEl.find('span').text($(this).text());

  parentsEl.is('.select-redirect') && window.location.replace($(this).data('value')) ;
});
// custom-select

$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click',function(e){
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('.element-btn').on('click', function (e) {
    e.preventDefault();
    
    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');
    console.log('cl',activeIndex);
    $('[data-element="' + activeIndex + '"].element-show').addClass('show');
});
console.log('rating');
$('.reviews-stars').on('click','i',function(){
  console.log('cl',$(this).index());
  $(this).parent().addClass('selected');
  $('.reviews-stars i').removeClass('active');
  let numRating = ($(this).index()+1);
  $(this).addClass('active');
  $('.com_block_star #rating-'+numRating).addClass('choise').prop('checked', true);
}); 
$('.password-field').on('click','i',changeStatePass);
let visibility = true;
function changeStatePass(){

  console.log(visibility);

  let thisEl = $(this);

  let changePass = (el,type,bool) => {
    $('.password-field').find('input').attr('type',type);
    el.attr('data-visibility', bool);
    visibility = !visibility;
  }

  visibility ? changePass(thisEl,'text', visibility) : changePass(thisEl,'password', visibility)

}


var longPhone = 16;
$(".phone-mask").on("keydown", function (e) {

    // if (!parseInt(e.originalEvent.key)) {
    //     if (e.originalEvent.key != "Backspace") {
    //         e.preventDefault();
    //     }
    // }
    if ($(this).val().length < longPhone) {
        longPhone = 16;
        $(".phone-mask").mask("+7(999)999-99-999", {
            placeholder: " + 7(   )   -  -  "
        });
    } else {
        longPhone = 11;
        $(this).unmask();
        $(".phone-mask").mask("999999999999999999");
    }
});


$('.hideshow-head').on('click',function(){
  $(this).parent().toggleClass('hideshow-item--active');
});

$('.faq-head').on('click',function(){
  $(this).parent().toggleClass('faq-item--active');
});

$('.stock-toggle').on('click',function(){
  $(this).parents('.stock-item').addClass('stock-item--active');
});
$('.close-stock').on('click',function(){
  $(this).parents('.stock-item').removeClass('stock-item--active');
});


var st = 0;
$(window).on("mousewheel DOMMouseScroll" , function(event){
  var delta = event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 ? 1 : -1;
  st = $(this).scrollTop();
  // console.log(st);


  
  if(st > 0){
    $('header').addClass('stick');
  }
  else{
    $('header').removeClass('stick');
  }
 
});   


$('.video-btn').on('click',function(){
  $(this).hide();
  $('video').trigger('play');
});


let filterWidth = $('.cases-filters').width();
let filterWidthInner;// = $('.cases-filters span').width();

$('.cases-filters').find('.btn').each(()=>{
  filterWidthInner = $('.cases-filters span').width() + 100;
  console.log('in', filterWidthInner, filterWidth)
  if(filterWidth <= filterWidthInner){
    console.log('in')
    $('.cases-filters .btn').not('.btn-more, .btn-hidden').last().addClass('btn-hidden');
  }
});
$('.btn-more').on('click',function(){
  $('.cases-filters .btn').removeClass('btn-hidden');
  $(this).remove();
});

$('.geography-list-more').on('click',function(){
  $(this).hide();
  $('.geography-list').addClass('geography-list-active'); 
});
//# sourceMappingURL=common-dist.js.map