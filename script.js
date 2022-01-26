let i = 0
const txt = "I'm Lunar Commands"
const speed = 80

const faders = document.querySelectorAll('.fade-in')

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading_animation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading_animation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
}

const appearOnScroll = new IntersectionObserver (function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})
