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
          alert("Ваш заказ отпрвлен. Менеджер свяжется с вами в ближайшее время.");
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

  $("#services-scroll").scrollTo(document.getElementById('services'), 800);

});
