/*CMD
  command: reff
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
   return
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
var bonus = 0.00000005
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(bonus)
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid)
  refcom.add(bonus)
  Bot.sendMessageToChatWithId(referrer.telegramid, "*🎉 Congratulations You Have Received +0.0000005 LTC*")
} else {
  Bot.sendMessage()
}
