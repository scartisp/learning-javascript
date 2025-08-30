function changeSubStat() {
  const subscribeElement = document.querySelector('.js-subscribe-button');
  if (subscribeElement.innerHTML === 'Subscribe') {
    subscribeElement.innerHTML = 'Subscribed';
    subscribeElement.classList.toggle('is-subscribed'); // toggle adds or removes a class from an html element
  }
  else {
    subscribeElement.innerHTML = 'Subscribe';
     subscribeElement.classList.toggle('is-subscribed');
  }
}