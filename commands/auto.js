/*CMD
  command: auto
  help: 
  need_reply: true
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
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var wallet = User.getProperty("LTCwallet")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
var history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = message
  if (history == undefined) {
    var newh =
      "-------------------------------------------------------------------------------------\n" +
      "✅ Withdraw Amount : " +
      amount +
      "LTC" +
      "\n⚕DATE " +
      time
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "-------------------------------------------------------------@"+bot.name+"------------------------" +
      "\n✅ Withdraw Amount : " +
      amount +
      "LTC" +
      "\n⚕ DATE " +
      time
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }
  if (message < 0.000000000000001) {
    Bot.sendMessage("_❌ Minimum Withdraw 0.000000000000001 LTC_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(8) + " LTC_"
      )
    } else {
      Bot.sendMessage(
        "*✅ Withdrawal Requested Successfully\nIt takes some transaction fee\n\n💳 Transaction Details = \n 💰Amount = " +
          message +
          " LTC\n💼 Wallet = " +
          wallet +
          "\n\n⏰Wait 1-12 Hour We Will Check And Pay You🎧 \n\n✅ Important❗*\n_If You Do Fake Refer You Will Banned\n\n🌹 Payment Channel : @cardingforallind*")
      balance.add(-message)
      Api.sendMessage({
        chat_id: "@LTC_Bot_payouts",
        text:
          "*🔋 New Withdraw Requested 🏦\n\n▪️ Status = Pending\n▪️ User =* " +
          user_link +
          "*\n▪️ User ID = " +
          user.telegramid +
          "\n▪️ Amount = " +
          message +
          " LTC\n▪️ User Referrals = " +
          refList.length +
          "\n\n💳 Address =\n " +
          wallet +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown"
     })
    }
  }
}

Bot.runCommand("Cr")
