var app = document.getElementById("app");
var Typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

Typewriter.pause(10000)
  .typeString(
    "<strong>Enterprise Services</strong> is a specialized division of 123Employee, the premier US managed Marketing and BPO service provider"
  )
  .typeString(
    " Enterprise Services provide exceptional voice trained employees to provide a range of voice related services"
  )
  .pauseFor(10000)
  .start();

//typewriter 2
var app = document.getElementById("appTwo");
var Typewriterx = new Typewriterx(appTwo, {
  loop: true,
  delay: 75,
});

Typewriterx.pause(10000)
  .typeString(
    "At 123Employee we have programs to empower our staff and give back to the local community"
  )
  .pauseFor(10000)
  .start();
