/*CMD
  command: 💌Mailing(Broadcast)
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _✅ Enter Your Message_
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == "1251111009"){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
