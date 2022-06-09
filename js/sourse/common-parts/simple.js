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