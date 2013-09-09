$(document).ready(function() {
  $('#roller button.add').on('click', add_die);

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      $(die).text(roll_die());
    });
  });
});


function add_die(){
  console.log("WAT");
  $('.dice').append('<div class="die">0</div>');
}

function roll_die(){
  var value = Math.floor((Math.random()*6)+1);
  return value;
}


