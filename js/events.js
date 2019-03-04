//define functions here

function getIt(){
  $('p').on('click', function(){
    alert ('Hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(event){
    if (event.which === g){
      alert ("You pressed 'g'!")
    }
  })
}


$(document).ready(function(){

// call functions here

});
