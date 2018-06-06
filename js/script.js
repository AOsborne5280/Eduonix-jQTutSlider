// Accordian
var action = "click";
var speed = "500";

$(document).ready(function () {
  //Question Handler
  $('li.q').on(action, function (){
  //get the next eliment
    $(this).next()
      .slideToggle (speed)
  //select all other answers
        .siblings('li.a')
          .slideUp ();
  //get image for active question
    var img = $(this).children('img');
  //remove rotate class for all images except the active
  $('img').not(img).removeClass('rotate');
  //Toggle rotate class
  img.toggleClass('rotate');
  });
});
