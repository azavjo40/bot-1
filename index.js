const  TelegramBot  =  require ( 'node-telegram-bot-api' ) ;

const  token  =  '1132688224:AAFvdz1zJ2rZtYgLRAJShSzyyIXdwvedaQU' ;
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user > 😂 " + msg.from.first_name);
    }
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }    
    var robot = "I'm robot";
    if (msg.text.indexOf(robot) === 0) {
        bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
    }

    var bye = "bye";
            if (msg.text.toString().toLowerCase().includes(bye)) {
            bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name); 
            } 

           
                var  what  =  "debil" ; 
      if  ( msg . text . includes ( what ) )  { 
      bot . kickChatMember ( msg . chat . id ,   msg . from . id ) ; 
     }  

     bot.onText(/\/sendpic/, (msg) => {

        bot.sendPhoto(msg.chat.id,"https://www.somesite.com/image.jpg",{caption : "Here we go ! \nThis is just a caption "} );
            
        });
         
     
        bot.sendMessage(msg.chat.id, msg.text);
    });