var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomnames: [],

  initialize: function() {
  },

  render: function() {
    _.each(RoomsView.roomnames, function(item) {
      var $option = RoomsView.roomTemplate({roomname: item});
      RoomsView.$select.append($option);
    });
  },

  getRoomnames: function(data, callback = () => {}) {
    var messages = data;
    _.filter(messages, function(message) {
      if (message.roomname !== undefined && message.roomname !== '') {
        if (RoomsView.roomnames.includes(message.roomname) !== true) {
          RoomsView.roomnames.push(message.roomname);
        }
      }
    });
    callback();
  },

  roomTemplate: _.template(`
  <option value="<%- roomname %>"><%- roomname %></option>
`)//not sure where the roomname is coming from yet.  we can change the <%- VARIABLE NAME ->

};
console.log(RoomsView.roomnames);