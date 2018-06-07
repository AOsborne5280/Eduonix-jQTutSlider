// Accordian from Eduonix/Traversy mini tutorial
var action = "click";
var speed = "500";

$(document).ready(function () {
  //Question Handler: when li.q is action-ed(click) run this function
  $('li.q').on(action, function (){
    //the element after li.q gets slide toggled
    $(this).next()
      .slideToggle (speed)
        //and all of its sibling are slid closed
        .siblings('li.a')
          .slideUp ();
    //the img children of the active li.q are selected
    var img = $(this).children('img');
  //remove rotate class for all images except the active
  $('img').not(img).removeClass('rotate');
  //Toggle rotate class
  img.toggleClass('rotate');
  });
});
