var ticTacToe = {
  endGame: false,
  playerTurn: 1,
  positionsTaken: [],
  player1: [],
  player2: [],
  winner: null,
  message: null,
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
    this.setMessage(null);
    if (!this.endGame) {
      var move = parseInt($("#player" + this.playerTurn).val());
      if (this.validMove(move)) {
        if (this.hasWon(this.playerMove(move))) {
          this.setMessage("The player " + this.winner + " wins!");
          this.endGame = true;
        } else {
          this.positionsTaken.push(move);
        }
      } else {
        this.setMessage('This move has already been played.');
      }
    } else {
      this.setMessage('The game has ended and player ' + this.winner + ' won the game!')
    }
  },
  hasWon: function(player) {
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
    this.winner = this.playerTurn;
    return false;
  },
  validMove: function(move) {
    // The move isn't in the list of played moves
    if ($.inArray(move, this.positionsTaken) == -1) {
      return true;
    }
  },
  playerMove: function(move) {
    var player = {};

    if (this.playerTurn == 1) {
      this.playerTurn = 2;
      player = this.player1;
    } else {
      this.playerTurn = 1;
      player = this.player2;
    }

    player.push(move);
    return player;
  },
  setMessage: function(message) {
    console.log(message);
    this.message = message;
  }
}