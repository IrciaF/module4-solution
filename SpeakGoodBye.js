(function (window) {
var byeSpeaker = {};
byeSpeaker.name = "names";
var speakWord = "Good Bye";
byeSpeaker.sayHello = function () {
  console.log(speakWord + " " + byeSpeaker.name);
}
  window.byeSpeaker = byeSpeaker;
  })(window);

