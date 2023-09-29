/*CMD
  command: /check_msg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_id = "1251111009"
//you may get it via Bot.sendMessage(user.telegramid)

var msg_count = Bot.getProperty("support_msg_count",0)

var msg_seen = Bot.getProperty("support_msg_seen",0)

var msg_details = Bot.getProperty("support_msg_details",{})


if(user.telegramid != admin_id){return}

if(msg_count-msg_seen < 1){
Bot.sendMessage("You have no any message pending")
return}

var msg = "Here are pending support message sent by users\n\n"
for(var i=[msg_seen+1];i<[msg_count+1];i++){

msg += "*User* : [" + msg_details[i].name + " " + msg_details[i].last_name + "](tg://user?id=" + msg_details[i].userId + ")" + "\n*User Id* : " + msg_details[i].userId + "\n*Message* :\n" + msg_details[i].message + "\n\n Reply it : /reply " + i + "\n\n\n"
}

Bot.setProperty("support_msg_seen",msg_count,"integer")
Bot.sendMessage(msg)
