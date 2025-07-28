function changeSubStat() {
  const subscribeElement = document.querySelector('.js-subscribe-button');
  if (subscribeElement.innerHTML === 'Subscribe')
    subscribeElement.innerHTML = 'Subscribed';
  else
    subscribeElement.innerHTML = 'Subscribe';
}