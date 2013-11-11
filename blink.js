var bot_id = 'tuna-bom';
var bot_key = '5qhy8w1384048743529';
var livebots = require('livebots')(bot_id, bot_key, "http://localhost:3000");
var five = require('johnny-five');

var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led(13);
  livebots.on('next', function (command){
    console.log(command.command);
    switch(command.command){
    case 'sim':
      led.on();
      break;
    case 'nao':
      led.off();
      break;
    }
  });
});




