var FormView = {

  $form: $('form'),



  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },



  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var messageInput = $('#message').val();
    var message = {
      username: App.username,
      text: messageInput,
      roomname: RoomsView.selectedRoom //need to collect what is active on submit
    };

    if (message.roomname === '') {
      alert('Please select or add a room before posting a message. ')
    } else if (message.text=== '') {
      alert('Please add message before posting')
    } else {
      Parse.create(message);
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
