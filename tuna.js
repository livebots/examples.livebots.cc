var bot_id = 'tuna-bom';
var bot_key = '5qhy8w1384048743529';
var livebots = require('livebots')(bot_id, bot_key, "http://localhost:3000");
var five = require('johnny-five');

var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led(13);
  var leftFootServo = new five.Servo(3);
  var rightFootServo = new five.Servo(9);
  var leftLegServo = new five.Servo(10);
  var rightLegServo = new five.Servo(11);

  board.repl.inject({
    leftFootServo: leftFootServo,
    rightFootServo: rightFootServo,
    leftLegServo: leftLegServo,
    rightLegServo: rightLegServo
  });

  leftFootServo.center();
  rightFootServo.center();
  leftLegServo.center();
  rightLegServo.center();

  livebots.on('next', function (command){
    switch(command.command){
    case 'sim':
      led.on();
      break;
    case 'nao':
      led.off();
      break;
    case 'chaplin':
      leftFootServo.move( 45 );
      rightFootServo.move( 135 );
      break;
    case 'ballet':
      leftFootServo.move( 135 );
      rightFootServo.move( 45 );
      break;
    }
  });
});




