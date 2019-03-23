

//loading screen style//


$(document).ready(function(){
  $('.load').fadeIn(5000);
  $('.load').delay(3000);
  $('.load').fadeOut();
  });


//modal style//



$(document).ready(function(){
  $("button").click(function(){
    $('.modal-popup').fadeOut();
  });
});

$(document).ready(function(){
  $(".close").click(function(){
    $('.modal-popup').hide();
  });
});
