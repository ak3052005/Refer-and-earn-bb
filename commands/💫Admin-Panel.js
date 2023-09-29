/*CMD
  command: 💫Admin-Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if ((user.telegramid == "1251111009")) {
  var buttons = [
    [
      { title: "💰Add-Balance", command: "💰Add-Balance" },
      { title: "💌Mailing(Broadcast)", command: "💌Mailing(Broadcast)" }
    ],
    [
      { title: "User's Settings 🔧", command: "User's Settings 🔧" },
      { title: "Check Balance 💼", command: "Check Balance 💼" }
    ],
    [{ title: "Withdrawal Settings 🛠 ", command: "Withdrawal Settings 🛠" }],
    [
      { title: "💸  Ban User 🔒", command: "Ban User 🔒" },
      { title: "Unban User 🔓", command: "Unban User 🔓" }
    ],
[
      { title: "🔙BACK", command: "🔙BACK" },
    ]
  ]

  Bot.sendInlineKeyboard(buttons, "👮‍♂*Welcome Admin Panel*")
} else {
  Bot.sendMessage("*You Are Not Admin  ❌*")
}
