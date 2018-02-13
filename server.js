var express = require('express');
var app = express();

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN || '***';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



// app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));
//
//
// app.get('/', function (request, response) {
//     response.send('Hello World!');
// });
//
// app.listen(app.get('port'), function () {
//     console.log("Node app is running at localhost:" + app.get('port'));
// });
//




// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

// send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

// send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});
