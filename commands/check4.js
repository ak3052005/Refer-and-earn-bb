/*CMD
  command: check4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var task1check = User.getProperty("task1check");
var user = options.result.status;
User.setProperty("status" , user, "string");
if (task1check == undefined){
if (user=="member" | user =="administrator" | user=="creator"){
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(0.0000005)
User.setProperty("task1check", Date.now(), "integer")
Bot.sendMessage(
  "*🎁 Congrats , you Received 0.0000005 LTC as A Sign Up Bonus*"
)
User.addToGroup("user")
Bot.runCommand("main_menu")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join channel*")
}}else{
Bot.sendMessage("❌You Have Already Received A Sign Up Bonus!!")
}

Bot.runCommand("main_menu")
