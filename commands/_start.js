/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "⚜️ Joined ⚜️" , command : "⚜️ Joined ⚜️" }]
Bot.sendInlineKeyboard(button , "*❄️You must have to Follow Us on Instagram 〽️\n\nhttps://www.instagram.com/pro_morningstar\n\n🛡 Please  Subscribe To Our Live Transactions Channels : \n\n➡️ @cardingforallind \n➡️ @promochanneltest \n➡️ @promo_channeltest \n➡️@promochanneltest1 \n\n➡️@LTC_Bot_payouts \n\n➡️@cardingforallind\n\n :- \n\nN/A \n\nAfter do all the steps click ☑️Joined*")
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(7)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +0.0000005 LTC When Your Referal Join all the Çhàññéls*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*You Already Started The Bot ❌*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
