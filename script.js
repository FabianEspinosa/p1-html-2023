const castParallax = () => {
  window.addEventListener('scroll', (event) => {
    const top = window.pageYOffset
    const layers = document.querySelectorAll('.parallax')
    layers.forEach((layer) => {
      const speed = layer.dataset.speed
      const yPos = -((top * speed) / 100)
      layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`
    })
  })
}
document.addEventListener('DOMContentLoaded', castParallax)