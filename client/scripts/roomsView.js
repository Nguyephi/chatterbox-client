var RoomsView = {

  $button: $('#rooms button'),
  $selectedRoom: $('#selectRoom'),
  roomnames: [],
  selectedRoom: '',

  initialize: function() {
    RoomsView.$selectedRoom.on('change', RoomsView.handleSelect);
  },

  render: function() {
    _.each(RoomsView.roomnames, function(item) {
      var $option = RoomsView.roomTemplate({roomname: item});
      RoomsView.$selectedRoom.append($option);
    });
  },

  handleSelect: function(e) {
    console.log(e.target);
    e.target.value ? RoomsView.selectedRoom = e.target.value : null;
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