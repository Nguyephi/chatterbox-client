// console.log(parse.messages)

var Messages = {
  messages: [],

  getMessages: function (data, cb = () => {}) {
    for (var i = 0; i < data.length; i++) {
      Messages.messages.push(data[i]);
    }
    cb()
  },

  add: function(message, cb = () => {}) {
    Messages.messages.unshift(Messages.checkMessage(message));
    cb(message)
  },

  checkMessage: function(message) { ///This is checking the message to make sure it has everything it needs b/c of _.template being picky
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};


