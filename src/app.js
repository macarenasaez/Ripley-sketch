
//función scroll
$(".button").on("click", function(){
  let posicion = $("#escandinava").offset().top;
  $("html, body").animate({
      scrollTop: posicion
  }, 2000); 
});

$(".button-scroll").on("click", function(){
  let posicion = $("#oslo").offset().top;
  $("html, body").animate({
      scrollTop: posicion
  }, 2000); 
});

 //función slick para carousel
  $('.bannerMain-container').slick({
    arrows: false /*para esconder btn nex */
  });

  