var throttle = require('lodash.throttle');
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

const lastSavedTime = localStorage.getItem('videoplayer-current-time');
console.log(lastSavedTime);

player
  .setCurrentTime(lastSavedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

player.on(
  'timeupdate',
  throttle(function (timeObj) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(timeObj.seconds)
    );
  }, 1000)
);
