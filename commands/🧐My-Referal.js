/*CMD
  command: 🧐My-Referal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib

var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(var i in refList){
    user = refList[i];
    msg+= "\n👤 " +  user.first_name + " @" + user.username + "";
  }
}else{
  msg = "YOU DIDN'T REFERRED ANY USER ❌❌";
}
Bot.sendMessage(msg);
