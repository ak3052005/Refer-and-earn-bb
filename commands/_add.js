/*CMD
  command: /add
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _✍️Enter How Much You Want To Add_
  keyboard: 
  aliases: 
CMD*/

var amount = parseFloat(message);
var tgid = User.getProperty("id");
var res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Amount Added Balance* \n👤 User: "+tgid+"\n💰 Amount:"+amount);
