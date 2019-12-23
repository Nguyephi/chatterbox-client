// console.log(parse.messages)

var Messages = {
  messages: [],

  getMessages: function (data) {
    for (var i = 0; i < data.length; i++) {
      Messages.messages.push(data[i]);
    }
    MessagesView.renderMessage();
  },

  add: function(message) {
    Messages.messages.unshift(Messages.checkMessage(message));
    MessagesView.renderMessage();

    // Messages.getMessages(Messages.messages);: this broke the website. probably because it's trying to rewrite Messages.messages with the data from Messages.messages...

  },

  checkMessage: function(message) { ///This is checking the message to make sure it has everything it needs b/c of _.template being picky
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};


