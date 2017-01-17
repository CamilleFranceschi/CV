$(window).resize(function(){
 if($(window).width()<875){
  $('.blue-vertical-line').removeClass('blue-vertical-line');
  $('.align-vertical').removeClass('align-vertical');
 }
 var circle = document.getElementById('circle');
 circle.outerHTML = circle.innerHTML;
});