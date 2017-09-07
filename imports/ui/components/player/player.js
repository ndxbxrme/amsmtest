import angular from 'angular';

export default angular.module('player', [])
.factory('player', function() {
  var sound = null;
  return {
    play: function(url) {
      if(sound) {
        sound.stop(); 
      }
      sound = soundManager.createSound({
        id: url,
        url: url
      });
      sound.play();
      console.log(sound);
    },
    stop: function() {
      if(sound) {
        sound.stop(); 
      }
    }
  }
});