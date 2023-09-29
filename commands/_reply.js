/*CMD
  command: /reply
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

var msg_details = Bot.getProperty("support_msg_details",{})

if(user.telegramid!=admin_id){return}
if(!params){return}

var user_link = "[" + msg_details[params].name + " " + msg_details[params].last_name + "](tg://user?id=" + msg_details[params].userId +")"

Bot.sendMessage("Please enter the reply to user " + user_link )

Bot.run({
command: "/adminreply",
options: {user_link: user_link,userId: msg_details[params].userId,message_id: msg_details[params].message_id}
})
