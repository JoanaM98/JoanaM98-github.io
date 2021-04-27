$(document).ready(function(){

$(".about-link").click(function(){
  $("html, body").animate({scrollTop:$("#sobre").offset().top},1000);
})
$(".education-link").click(function(){
  $("html, body").animate({scrollTop:$("#educação").offset().top},1000);
})
$(".experience-link").click(function(){
  $("html, body").animate({scrollTop:$("#experiência").offset().top},1000);
})
$(".skills-link").click(function(){
  $("html, body").animate({scrollTop:$("#skills").offset().top},1000);
})

$(".contacts-link").click(function(){
  $("html, body").animate({scrollTop:$("#contactos").offset().top},1000);
})

$(".menu-icon").click(function(){
  $(".main-nav").toggleClass("visible");
  $(".menu-icon").toggleClass("fa-bars").toggleClass("fa-times");
})
})
