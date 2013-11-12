var irc = require('irc');
var bot = new irc.Client('irc.freenode.net', 'hyperaudiologbot', {
    channels: ['#hyperaudio'],
    port: 6667,
    debug: true
});

bot.addListener('message', function(from, to, message) {
    if(  message.indexOf('coffee') > -1) {
        bot.say(to, 'Moar Coffee!!!');
    }
});