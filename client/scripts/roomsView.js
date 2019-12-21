var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomnames: [],

  initialize: function() {
  },

  render: function() {
  },

  getRoomnames: function(data) {
    var messages = data.results;

    _.filter(messages, function(message) {
      if (message.roomname !== undefined && message.roomname !== '') {
        if (RoomsView.roomnames.includes(message.roomname) !== true) {
          RoomsView.roomnames.push(message.roomname)
        }
      }
    })
  }

};
