$(document).ready(function() {
  var my_die = new Die 
  $('#roller button.add').on('click', addDie);

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      $(die).text(roll_die());
    });
  });
});

var DiceBag = function() {
  
}

function addDie(die){
  $('.dice').append(die.render());
}


var Die = function() {
  this.sides = 6;
  this.value = 0; 
};

Die.prototype.roll = function(){
  this.value = Math.floor((Math.random()*6)+1);
}

Die.prototype.render = function(){
  return '<div class="die">'+ this.value + '</div>'
}

Die.prototype.sayHello = function(){
  alert ("hello")
}
