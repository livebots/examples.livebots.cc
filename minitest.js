var bot_id = 'tuna-bom';
var bot_key = '5qhy8w1384048743529';
var livebots = require('livebots')(bot_id, bot_key, "http://localhost:3000");



livebots.on('next', function (command){
  console.log("COMMAND");
});

livebots.on('error', function(err){
  console.log("SOME ERROR", err);
});  



