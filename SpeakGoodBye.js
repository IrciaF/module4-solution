(function (window) {
var helloSpeaker = {};
helloSpeaker.name = "names";
var speakWord = "Good Bye";
helloSpeaker.sayHello = function () {
  console.log(speakWord + " " + helloSpeaker.name);
}
  window.helloSpeake = helloSpeake;
  })(window);

