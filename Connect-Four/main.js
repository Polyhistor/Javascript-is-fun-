var n1 = prompt("What's first player's name?")

var n2 = prompt("What's second player's name?")

$(document).ready(function() {
    $('#player1').text(n1);
    $('#player2').text(n2);
});



function colorizer(){

  $(document).ready(function() {

        $('tr').eq(0).children().eq(0).on('click', function(){
          $('tr').eq(-1).children().eq(0).css('background-color','red')
        })

  })

}

colorizer()
