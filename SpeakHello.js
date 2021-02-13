(function (window) {
var helloSpeaker = {};
  helloSpeaker.name = "names";
var speakWord = "Hello";
helloSpeaker.sayHello = function () {
  console.log(speakWord + " " + helloSpeaker.name);
}
})(window);
 
