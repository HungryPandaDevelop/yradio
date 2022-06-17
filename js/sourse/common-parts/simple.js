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
