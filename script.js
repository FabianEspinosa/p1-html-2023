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
document.addEventListener('DOMContentLoaded', () => {
  castParallax()
  let slideIndex = 1
  const slides = document.querySelectorAll('#slider img')
  const totalSlides = slides.length
  const prevBtn = document.querySelector('#prevBtn')
  const nextBtn = document.querySelector('#nextBtn')
  const showSlides = (n) => {
    if (n > totalSlides) {
      slideIndex = 1
    } else if (n < 1) {
      slideIndex = totalSlides
    } else {
      slideIndex = n
    }
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
  }
  const plusSlides = (n) => {
    showSlides((slideIndex += n))
  }
  prevBtn.addEventListener('click', function () {
    plusSlides(-1)
  })
  nextBtn.addEventListener('click', function () {
    plusSlides(1)
  })
  showSlides(slideIndex)
})
