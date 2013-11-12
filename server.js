var winston = require('winston');
var irc = require('irc');

require('winston-papertrail').Papertrail;

var logger = new winston.Logger({
    transports: [
        new winston.transports.Papertrail({
            host: 'logs.papertrailapp.com',
            port: 12345,
            logFormat: function(level, message) {
                // return '<<<' + level + '>>> ' + message;
                return message;
            }
        })
    ]
});
  
var bot = new irc.Client('irc.freenode.net', 'hyperabot', {
    channels: ['#hyperaudio'],
    port: 6667,
    debug: true
});

bot.addListener('message', function(from, to, message) {
    if (message.indexOf('coffee') > -1) {
        bot.say(to, 'Moar Coffee!!!');
    }
	
	logger.info(from + ': ' + message);
});