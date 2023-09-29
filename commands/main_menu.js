/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.sendKeyboard(
    "👤My Account,💵Earn\n🏅LeaderBoard,🧐My-Referal\n💫Earn-Extra\n📞Support , 📊Statistics\n💫Admin-Panel",
    "*〽️Refer And Earn LTC*"
  )
Bot.runCommand("reff")
}
if (user == "left") {
  Bot.runCommand("/start")
}
