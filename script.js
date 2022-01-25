let i = 0
let txt = "I'm Lunar Commands"
let speed = 80

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading_animation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()