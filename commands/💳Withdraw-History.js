/*CMD
  command: 💳Withdraw-History
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var his = User.getProperty("history")
if(his == undefined){
var go ="🕝 Your All Withdrawal"+"\n----------------------------------------------------"+"\nNo withdraw Found";
Bot.sendMessage(go)
}else{
Bot.sendMessage("🕝 Your All Withdrawal\n\n"+his)
}
