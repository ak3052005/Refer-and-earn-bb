/*CMD
  command: 📊Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stat =
    "*📊 Total members : " +
    status +
    " Users\n\n➕ Total successful Withdraw : " +
    userPayment.value().toFixed(0) +
    " LTC\n\n👑Bot made by @pro_morningstar 👑*"

  Bot.sendMessage(stat)
}
