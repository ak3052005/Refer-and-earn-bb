/*CMD
  command: /adminreply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _💬 How Can I Help You ?_
  keyboard: 
  aliases: 
CMD*/

var admin_id = "1251111009"
//you may get it via Bot.sendMessage(user.telegramid)

if(user.telegramid!=admin_id){return}

var option = {reply_to_message_id: options.message_id}
Bot.sendMessageToChatWithId(options.userId,"Reply from Admin:-\n" + message, option)

Bot.sendMessage("Message has been sent to " + options.user_link)

Bot.runCommand("main_menu")
