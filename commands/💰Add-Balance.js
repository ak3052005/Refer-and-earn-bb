/*CMD
  command: 💰Add-Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _❄️Send User ID of That User_
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == "1251111009")) {
var msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/add");
} else {
  Bot.sendMessage("*You Are Not Admin  ❌*")
}
