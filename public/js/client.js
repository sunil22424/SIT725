$(document).ready(function() {
    $('#simpleForm').submit(function(event) {
      event.preventDefault();
  
      const formData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val()
      };
  
      $.post('/submit-form', formData, function(response) {
        alert('Form submitted successfully: ' + response.message);
      });
    });
  });
  