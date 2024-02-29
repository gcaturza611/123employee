var app = document.getElementById("app");
var Typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

Typewriter.pause(2000)
  .typeString("Easily create cool and beautiful")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong>Awesome</strong> multiline typewriter effect for")
  .typeString("<strong> your website in just 5 minutes</strong>")
  .pauseFor(1000)
  .start();
