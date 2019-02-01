
$('#header').addClass('headline'); //changed the :header to #header

$('li').hide().fadeIn(1500);//the fade needed to be fadeIn  :lt(4)

$('li').click( function() { // the .on("click", function()) was wrond
  $(this).remove(); //the $(that) needed to be $(this)
});
