var MessagesView = {

  $chats: $('#chats'),


  //What would MessagesView initialize?
  initialize: function() {

  },

  // call render function we we need to render page with message
  renderMessage: function() {
    _.each(Messages.messages, function(item) {
      var $message = MessageView.render(item);
      MessagesView.$chats.append($message);
    });
  }

};
