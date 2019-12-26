var Messages = {
  messages: [],
  filteredMessages: [],

  getMessages: function (data, cb = () => {}) {
    for (var i = 0; i < data.length; i++) {
      Messages.messages.push(Messages.checkMessage(data[i]));
    }
    cb(Messages.messages)
  },

  getMessagesByRoom: function(room, cb = () => {}) {
    var filteredMessages = [];
    if (room) {
      _.filter(Messages.messages, function(message) {
        if (message.roomname === room) {
          filteredMessages.push(message);
        }
      })
      Messages.filteredMessages = filteredMessages.slice()
      cb(Messages.filteredMessages)
    }
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


