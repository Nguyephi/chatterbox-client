var MessagesView = {

  $chats: $('#chats'),

  messages: [],


  //What would RoomsView initialize?
  initialize: function() {
  },

  // call render function we we need to render page with message
  render: function() {
  },

  getMessages: function (data) {
    MessageView.message = data.results;
  }

};