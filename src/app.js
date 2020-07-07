$(".button-scroll").click(function() {
    let name = $(this).data("name")
    let box = "#" + name + "-box"
    $('html, body').animate({
    scrollTop: $(box).offset().top
    }, 3000);
  });
  

 //función slick para carousel
  $('.bannerMain-container').slick({
    arrows: false /*para esconder btn nex */
  });

  