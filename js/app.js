
$('.spoiler').on('click', 'button', function(event){
  console.log(event.target);
  //   //show the spoiler text
    $(this).prev().show();
  // hide the 'reveal spoiler' button
    $(this).hide();
});


//create the reveal spoiler button
const $button = $('<button>Reveal Spoiler</button>');
//apend to web page
$('.spoiler').append($button);

// hide the spoiler text
$('.spoiler span').hide();
