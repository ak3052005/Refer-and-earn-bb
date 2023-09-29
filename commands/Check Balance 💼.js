/*CMD
  command: Check Balance 💼
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _🛠Enter User id?_
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == "1251111009")) {
let msg = message
User.setProperty("id", msg, "integer")
let tgid = User.getProperty("id")
// telegramid - it is telegram id for another user
let res = Libs.ResourcesLib.anotherUserRes("money", tgid)
Bot.sendMessage(
  "*🆔 User Id :-* " + tgid + " \n\n💰 Balance   :- " + res.value()
)
} else {
  Bot.sendMessage("*You Are Not Admin  ❌*")
}
