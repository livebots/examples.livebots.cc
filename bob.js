var bot_id = 'bob';
var bot_key = '2r3daz1384111260323';
var livebots = require('livebots')(bot_id, bot_key, "http://localhost:3000");
var five = require('johnny-five');

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(13);
  leftFootServo = new five.Servo(3);
  rightFootServo = new five.Servo(9);
  leftLegServo = new five.Servo(10);
  rightLegServo = new five.Servo(11);

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
    console.log(command.command);
    switch(command.command){
      case "base":
        leftFootServo.center();
        rightFootServo.center();
        break;
      case "chaplin":
        leftFootServo.move( 45 );
        rightFootServo.move( 135 );
        break;
      case "ballet":
        leftFootServo.move( 135 );
        rightFootServo.move( 45 );
        break;
      case "dance":
        leftFootServo.move( 45 );
        rightFootServo.move( 135 );
        leftFootServo.move( 135 );
        rightFootServo.move( 45 );
        leftFootServo.move( 45 );
        rightFootServo.move( 135 );
        break;      
    }
  })
});




