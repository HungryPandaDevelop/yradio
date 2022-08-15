

$('.hideshow-head').on('click',function(){
  $(this).parent().toggleClass('hideshow-item--active');
});

$('.faq-head').on('click',function(){
  $(this).parent().toggleClass('faq-item--active');
});

$('.stock-toggle').on('click',function(e){
  e.preventDefault();
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

$('.show-next').on('click',function(){
  $(this).parents('.services-qwiz-item').removeClass('active').next().addClass('active');
});