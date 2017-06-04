// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE

(function (window) {
    var helloSpeaker = new Object();

    // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    var speakWord = "Hello";
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
