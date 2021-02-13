(function (window) {
var helloSpeaker = {};
  helloSpeaker.names = [];
var speakWord = "Hello";
helloSpeaker.sayHello = function () {
  console.log(speakWord + " " + helloSpeaker.name);
}
  window.helloSpeaker = helloSpeaker;
})(window);
 
