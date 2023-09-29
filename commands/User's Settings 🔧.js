/*CMD
  command: User's Settings 🔧
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if ((user.telegramid == "1251111009"))  {
  var buttons = [
    [
      { title: "User Balance Checker", command: "Check Balance 💼  " },
      { title: "🍟Change balance", command: "💰Add-Balance" }
    ],
    [
      { title: "✍Massage To User", command: "/masato" },
      { title: "🔃 Ask User ", command: "/ask" }
    ]
  ]
  Bot.sendInlineKeyboard(buttons, "👮‍♂*Welcome Admin Panel*")
} else {
  Bot.sendMessage("*Not Admin  ❌*")
}
