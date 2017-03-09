$(document).ready(function(){

  $(".order__btn").on('click', function(event) {
    $(".popup__1").addClass("show");
    return false;
  });

  $(".call__btn").on("click", function(event) {
  $(".popup__2").addClass("show");
  return false;
  });

  $(".cross").on('click', function(event) {
    $(".popup__1").removeClass("show");
    $(".popup__2").removeClass("show");
    return false;
  });

  $("#call-form").submit(function() { //устанавливаем событие отправки для формы с id=form
      var form_data = $(this).serialize(); //собераем все данные из формы
      $.ajax({
        type: "POST", //Метод отправки
        url: "../call.php", //путь до php фаила отправителя
        data: form_data,
        success: function() {
          //код в этом блоке выполняется при успешной отправке сообщения
          alert("Мы перезвоним вам в ближайшее время.");
        }
      });
  });

  $("#order-form").submit(function() { //устанавливаем событие отправки для формы с id=form
      var form_data = $(this).serialize(); //собераем все данные из формы
      $.ajax({
        type: "POST", //Метод отправки
        url: "../order.php", //путь до php фаила отправителя
        data: form_data,
        success: function() {
          //код в этом блоке выполняется при успешной отправке сообщения
          alert("Ваш заказ отправлен. Менеджер свяжется с вами в ближайшее время.");
        }
      });
  });

  $("#feedback-form").submit(function() { //устанавливаем событие отправки для формы с id=form
      var form_data = $(this).serialize(); //собераем все данные из формы
      $.ajax({
        type: "POST", //Метод отправки
        url: "../send.php", //путь до php фаила отправителя
        data: form_data,
        success: function() {
          //код в этом блоке выполняется при успешной отправке сообщения
          alert("Ваше сообщение отправлено.");
        }
      });
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
