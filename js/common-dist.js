


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
  $(this).find('option').each(function(index){
    $(this).attr('data-index',index);
  });
  if(dataText){
      firstElOption = dataText;
  }


  let styleSelectBoxElement = 
    $(`<div class='custom-select ${dataClass}'>
        <span>${firstElOption}</span>
        <ul class='ln'></ul>
        <i></i>
      </div>
    `);

  $(this).before(styleSelectBoxElement).hide();

  $(this).find('option').each(function (index) {
      var optionText = $(this).text();
      $(this).parent().prev().find('ul').append('<li data-index="'+index+'">' + optionText + '</li>');
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


console.log('test');
 
ymaps.ready(function () {
    var massCoord = [];
    $(".contacts-address-line").each(function (index) {
        var oneCoordX = $(this).data("coord-x");
        var oneCoordY = $(this).data("coord-y");
        var oneCord = [];
        oneCord.push(oneCoordX, oneCoordY, (index + 1))
        massCoord.push(oneCord);
    });

    var masMark = massCoord;
    // console.log("masMark", masMark);
    var mapMarker = $('#map').data('marker');
    console.log(mapMarker);
    
    var myMap = new ymaps.Map('map', {
        center: [masMark[0][0], masMark[0][1]],
        zoom: 9
    });


    var myPlacemarkWithContent = [];
    for (var i = 0; i < masMark.length; i++) {
        var addressEl = $("#address-" + i);
        var addressImg = addressEl.find(".photo-address").attr("src");
        var addressPhone = addressEl.find(".phone-feedback").html();
        var addressText = addressEl.find(".address").html();




        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="box-map">' +
            '<img scr="' + addressImg + '">' +
            '<div class="box-map-content"><div>' + addressText + '</div>' +
            '<div>' + addressPhone + '</div>' +
            '</div></div>');

        var x = masMark[i][0];
        var y = masMark[i][1];

        // console.log("for", x, y);

        myPlacemarkWithContent[i] = new ymaps.Placemark([x, y], {
            id: i + 1,
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя'
        }, {
            balloonContentLayout: BalloonContentLayout,
            // Опции.
            // Необходимо указать данный тип макета.
            hideIconOnBalloonOpen: false,
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: mapMarker,
            // Размеры метки.
            iconImageSize: [30, 37],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -37],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 37] //,
            // Макет содержимого.
            //iconContentLayout: MyIconContentLayout
        });
        myMap.geoObjects
            .add(myPlacemarkWithContent[i]);

        myMap.setBounds(myMap.geoObjects.getBounds(), {
            checkZoomRange: true
        }).then(function () {
            if (myMap.getZoom() > 12) myMap.setZoom(12);
        });

        //});

    }

    // $(".contacts-address .link").on("click", function (e) {
    //     e.preventDefault();
    //     var itemIndex = $(this).parents(".contacts-address-line").data("index");
    //     $("html,body").animate({
    //         scrollTop: $('.map').offset().top
    //     }, 1000);

    //     console.log("forCenter", [masMark[itemIndex][0], masMark[itemIndex][1]]);


    //     myMap.setCenter([masMark[itemIndex][0], masMark[itemIndex][1]]);

    //     myPlacemarkWithContent[itemIndex].balloon.open();
    // });

});
//# sourceMappingURL=common-dist.js.map