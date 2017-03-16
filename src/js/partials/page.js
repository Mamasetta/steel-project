$(document).ready(function(){

  $(".order__btn").on('click', function(event) {
    $(".popup__1").addClass("show");
    return false;
  });

  $(".call__btn").on("click", function(event) {
  $(".popup__2").addClass("show");
  return false;
  });

  $(".works__item_1").on("click", function(event) {
  $(".works__item_big-1").addClass("show");
  return false;
  });

  $(".works__item_2").on("click", function(event) {
  $(".works__item_big-2").addClass("show");
  return false;
  });

  $(".works__item_3").on("click", function(event) {
  $(".works__item_big-3").addClass("show");
  return false;
  });

  $(".works__item_4").on("click", function(event) {
  $(".works__item_big-4").addClass("show");
  return false;
  });

  $(".works__item_5").on("click", function(event) {
  $(".works__item_big-5").addClass("show");
  return false;
  });

  $(".works__item_6").on("click", function(event) {
  $(".works__item_big-6").addClass("show");
  return false;
  });

  $(".works__item_7").on("click", function(event) {
  $(".works__item_big-7").addClass("show");
  return false;
  });

  $(".works__item_8").on("click", function(event) {
  $(".works__item_big-8").addClass("show");
  return false;
  });

  $(".works__item_9").on("click", function(event) {
  $(".works__item_big-9").addClass("show");
  return false;
  });

  $(".works__item_10").on("click", function(event) {
  $(".works__item_big-10").addClass("show");
  return false;
  });

  $(".works__item_11").on("click", function(event) {
  $(".works__item_big-11").addClass("show");
  return false;
  });

  $(".works__item_12").on("click", function(event) {
  $(".works__item_big-12").addClass("show");
  return false;
  });

  $(".cross").on('click', function(event) {
    $(".popup__1").removeClass("show");
    $(".popup__2").removeClass("show");
    $(".works__item_big-1").removeClass("show");
    $(".works__item_big-2").removeClass("show");
    $(".works__item_big-3").removeClass("show");
    $(".works__item_big-4").removeClass("show");
    $(".works__item_big-5").removeClass("show");
    $(".works__item_big-6").removeClass("show");
    $(".works__item_big-7").removeClass("show");
    $(".works__item_big-8").removeClass("show");
    $(".works__item_big-9").removeClass("show");
    $(".works__item_big-10").removeClass("show");
    $(".works__item_big-11").removeClass("show");
    $(".works__item_big-12").removeClass("show");
    return false;
  });

  $("body").on('click', function(event) {
    $(".works__item_big-1").removeClass("show");
    $(".works__item_big-2").removeClass("show");
    $(".works__item_big-3").removeClass("show");
    $(".works__item_big-4").removeClass("show");
    $(".works__item_big-5").removeClass("show");
    $(".works__item_big-6").removeClass("show");
    $(".works__item_big-7").removeClass("show");
    $(".works__item_big-8").removeClass("show");
    $(".works__item_big-9").removeClass("show");
    $(".works__item_big-10").removeClass("show");
    $(".works__item_big-11").removeClass("show");
    $(".works__item_big-12").removeClass("show");
    return false;
  });

  $(".popup__container").on('click', function(event) {
    $(".popup__1").removeClass("show");
    $(".popup__2").removeClass("show");
    return false;
  });

  $('html').keydown(function(event){
    if (event.keyCode == 27) {
      $(".popup").removeClass("show");
    }
  });

  $("#header-services-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#services').offset().top}, 800);
      return false;

  })

  $("#header-benefits-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#benefits').offset().top}, 800);
      return false;

  })

  $("#header-econom-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#econom').offset().top}, 800);
      return false;

  })

  $("#header-works-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#works').offset().top}, 800);
      return false;

  })

  $("#header-costs-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#costs').offset().top}, 800);
      return false;

  })

  $("#header-stages-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#stages').offset().top}, 800);
      return false;

  })

  $("#header-feedback-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#feedback').offset().top}, 800);
      return false;

  })

  $("#header-repair-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#repair').offset().top}, 800);
      return false;

  })

  $("#header-contacts-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#contacts').offset().top}, 800);
      return false;

  })

  $("#footer-services-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#services').offset().top}, 800);
      return false;

  })

  $("#footer-benefits-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#benefits').offset().top}, 800);
      return false;

  })

  $("#footer-econom-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#econom').offset().top}, 800);
      return false;

  })

  $("#footer-works-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#works').offset().top}, 800);
      return false;

  })

  $("#footer-costs-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#costs').offset().top}, 800);
      return false;

  })

  $("#footer-stages-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#stages').offset().top}, 800);
      return false;

  })

  $("#footer-feedback-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#feedback').offset().top}, 800);
      return false;

  })

  $("#footer-repair-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#repair').offset().top}, 800);
      return false;

  })

  $("#footer-contacts-link").on("click", function() {

      $("html, body").animate({scrollTop: $('#contacts').offset().top}, 800);
      return false;

  })
});
