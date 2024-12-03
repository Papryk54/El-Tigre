export class FormHandler {
  constructor(submit, url) {
    this.submitButton = document.getElementById(submit);
    this.url = url;

    this.init();
  }

  init() {
    const _this = this;
    this.submitButton.addEventListener('click', function(e){
      e.preventDefault();
      _this.handleSubmit(_this.url);
    });
  }

  handleSubmit(url) {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;

    const formData = { name, title, message };

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to send message');
        }
      })
      .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message');
      });
  }
}
