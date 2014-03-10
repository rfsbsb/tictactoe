$(document).ready(function(){
  $("#playButton").on('click', function(){
    ticTacToe.play();
    $("#turn span").html(ticTacToe.playerTurn);
    $("#messages").html(ticTacToe.message);
  });
});