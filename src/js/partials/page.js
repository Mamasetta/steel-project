var openOrderPopup = document.querySelectorAll(".order__btn");
var openCallPopup  = document.querySelector(".call__btn");
var popupOrder     = document.querySelector(".popup__1");
var popupCall      = document.querySelector(".popup__2");
var closePopup     = document.querySelectorAll(".cross");

for (var i = 0; i < openOrderPopup.length; i++) {

    openOrderPopup[i].addEventListener('click', function(event) {

      event.preventDefault();
      popupOrder.classList.add("show");

    });

}

for (var i = 0; i < closePopup.length; i++) {

    closePopup[i].addEventListener('click', function(event) {

      event.preventDefault();
      popupOrder.classList.remove("show");
      popupCall.classList.remove("show");

    });

}

openCallPopup.addEventListener("click", function(event) {

  event.preventDefault();
  popupCall.classList.add("show");

});




// $(document).ready(function(){
//     $("#call-form").submit(function() { //устанавливаем событие отправки для формы с id=form
//             var form_data = $(this).serialize(); //собераем все данные из формы
//             $.ajax({
//             type: "POST", //Метод отправки
//             url: "call.php", //путь до php фаила отправителя
//             data: form_data,
//             success: function() {
//                    //код в этом блоке выполняется при успешной отправке сообщения
//                    alert("Мы перезвоним вам в ближайшее время.");
//             };
//     });
// });
//
//
// $(document).ready(function(){
//     $("#order-form").submit(function() { //устанавливаем событие отправки для формы с id=form
//             var form_data = $(this).serialize(); //собераем все данные из формы
//             $.ajax({
//             type: "POST", //Метод отправки
//             url: "order.php", //путь до php фаила отправителя
//             data: form_data,
//             success: function() {
//                    //код в этом блоке выполняется при успешной отправке сообщения
//                    alert("Ваш заказ отпрвлен. Менеджер свяжется с вами в ближайшее время.");
//             });
//     });
// });
//
//
// $(document).ready(function(){
//     $("#feedback-form").submit(function() { //устанавливаем событие отправки для формы с id=form
//             var form_data = $(this).serialize(); //собераем все данные из формы
//             $.ajax({
//             type: "POST", //Метод отправки
//             url: "send.php", //путь до php фаила отправителя
//             data: form_data,
//             success: function() {
//                    //код в этом блоке выполняется при успешной отправке сообщения
//                    alert("Ваше сообщение отправлено.");
//             });
//     });
// });
