/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("LTCwallet")
var button = [{ title : "Set Wallet ✏" , command : "setwallet" }]
Bot.sendInlineKeyboard(button , "*Account Settings ⚙\n\n🤴 User : "+user.first_name+"\n🆔 User ID : "+user.telegramid+"\n💼 Wallet :* "+wallet+"\n\n*If You're Wallet Is Undefined Set It By Clicking The Button Below*")
