/*CMD
  command: setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
_Send your COINBASE email address_


  ANSWER
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("LTCwallet")
User.setProperty("LTCwallet" , data.message ,"string")
Bot.sendMessage("*✅ LTC wallet address set To :* "+data.message+"")
