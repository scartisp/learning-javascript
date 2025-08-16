document.getElementById('button-container').addEventListener('click', function (event) { //event is of type object, includes what triggered the event listener,
  //where the clicke happened, modifier keys, etc. this event handler will always be passed as the first parameter for an event listener function
  if (event.target.classList.contains('js-button')) { //event.target is the thing that triggers the event listener. we check to see if it is a button that contains the needed class
    this.querySelectorAll('.js-button').forEach(btn => {
      btn.classList.remove('selected')
    })
    event.target.classList.add('selected')
  }
})