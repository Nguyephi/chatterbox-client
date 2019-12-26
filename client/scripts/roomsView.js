var RoomsView = {

  $button: $('#rooms button'),
  $selectedRoom: $('#selectRoom'),
  $addRoom: $('#addRoom'),
  roomnames: [],
  selectedRoom: '',

  initialize: function() {
    RoomsView.$selectedRoom.on('change', RoomsView.handleSelect);
    RoomsView.$addRoom.on('click', RoomsView.handleRoomnameInput);
  },

  render: function() {
    _.each(RoomsView.roomnames, function(item) {
      var $option = RoomsView.roomTemplate({roomname: item});
      RoomsView.$selectedRoom.append($option);
    });
  },

  handleSelect: function(e) {
    e.target.value ? RoomsView.selectedRoom = e.target.value : null;
    Messages.getMessagesByRoom(e.target.value, MessagesView.renderMessage);
  },

  handleRoomnameInput: function (e) {
    e.preventDefault();
    var $roomname = $('#roomname').val();
    var $option = RoomsView.roomTemplate({roomname: $roomname})
    if ($roomname.length > 0) {
      if (RoomsView.roomnames.includes($roomname) === false) {
        RoomsView.selectedRoom = $roomname;
        RoomsView.$selectedRoom.append($option);
        RoomsView.$selectedRoom.select().val($roomname);
        Messages.getMessagesByRoom($roomname, MessagesView.renderMessage);
        $('#roomname').val('');
      } else {
        alert('Room exist.');
      }
    } else {
      alert('Please input a roomname to add to the list. Also note that your room is temporary until you start posting messages in them. Otherwise they will be removed when the page is refreshed.');
      // can store the users new roomname in local storage to survive refresh wipe.
    }
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