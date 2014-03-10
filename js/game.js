var ticTacToe = {
  endGame: false,
  playerTurn: 1,
  positionsTaken: [],
  player1: [],
  player2: [],
  winningConditions: [[11, 12, 13]
    , [21,22,23]
    , [31,32,33]
    , [11,12,13]
    , [12,22,32]
    , [13,23,33]
    , [11,22,33]
    , [13,22,31]
  ],
  play: function () {
    if (!this.endGame) {
      var move = parseInt($("#player" + this.playerTurn).val());
      this.hasWinner(player1);
      if ($.inArray(move, this.positionsTaken) == -1) {
        this.playerTurn == 1 ? this.player1.push(move) : this.player2.push(move);
        this.playerTurn = this.playerTurn == 1 ? 2 : 1;
        this.positionsTaken.push(move);
      } else {
        console.log('This move has already been played.');
      }
    }
  },
  hasWinner: function(player) {
    for (var i in this.winningConditions) {
      var items = this.winningConditions[i];
      var countItems = 0;
      for (var i = 0; i < player.length; i++) {
        if ($.inArray(player[i], items) != -1) {
          countItems++;
        }
      };
      if (countItems == 3) {
        return true;
      }
    };
    return false;
  }
}