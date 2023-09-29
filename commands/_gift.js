/*CMD
  command: /gift
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: email de 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id,
as_protected: false
})
Bot.sendMessage("done, enjoy!")
