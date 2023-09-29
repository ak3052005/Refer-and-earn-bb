/*CMD
  command: Unban User 🔓
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _🛠Enter User id?_
  keyboard: 
  aliases: 
CMD*/

var admin="1251111009"

if (data.message=="Back 🔙"){
Bot.runCommand("9557922245")
}else{
if (user.telegramid==admin){
Bot.setProperty(""+data.message+"" , "ban" , "string");
Bot.sendMessage("User Has Been UnBan");
}else{
Bot.sendMessage("You Are Not the admin❌");
}
}
