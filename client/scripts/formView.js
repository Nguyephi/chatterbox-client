var FormView = {

  $form: $('form'),



  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var messageInput = $('#message').val()
    var message = {
      username: App.username,
      text: messageInput,
      roomname: App.roomname
    };

    Parse.create(message);
    // , function(data) {
    //   _.extend(message, data);
    //   console.log(message);

    // });

    Messages.add(message);
    MessagesView.renderMessage();


  },












  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
