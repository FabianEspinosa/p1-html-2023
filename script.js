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
  const disableButton = () => {
    nextBtn.style.pointerEvents = 'none'
    prevBtn.style.pointerEvents = 'none'
    setTimeout(() => {
      nextBtn.style.pointerEvents = 'auto'
      prevBtn.style.pointerEvents = 'auto'
    }, 1500)
  }
  const showSlides = (n, btn) => {
    disableButton()
    if (n > totalSlides) {
      slideIndex = 1
    } else if (n < 1) {
      slideIndex = totalSlides
    } else {
      slideIndex = n
    }
    console.log(slideIndex)
    console.log(n)
    if (btn === 'nextBtn') {
      if (n > totalSlides) {
        slides[0].style.zIndex = 2
        slides[totalSlides - 1].style.zIndex = null
        setTimeout(() => {
          slides[totalSlides - 1].classList.remove('show')
        }, 1500)
        slides[slideIndex - 1].classList.add('show')
      } else {
        slides[slideIndex - 2].style.zIndex = null
        setTimeout(() => {
          slides[slideIndex - 2].classList.remove('show')
        }, 1500)
        slides[slideIndex - 1].classList.add('show')
      }
    } else if (btn === 'prevBtn') {
      if (n < 1) {
        slides[0].style.zIndex = null
        setTimeout(() => {
          slides[0].classList.remove('show')
        }, 1500)
        slides[totalSlides - 1].classList.add('show')
        slides[totalSlides - 1].style.zIndex = 2
      } else {
        slides[slideIndex].style.zIndex = null
        setTimeout(() => {
          slides[slideIndex].classList.remove('show')
        }, 1500)
        slides[slideIndex - 1].classList.add('show')
        slides[slideIndex - 1].style.zIndex = 2
      }
    } else if (btn === 'new') {
      slides[slideIndex - 1].classList.add('show')
    }
  }
  const plusSlides = (n, btn) => {
    showSlides((slideIndex += n), btn)
  }
  prevBtn.addEventListener('click', function () {
    plusSlides(-1, 'prevBtn')
  })
  nextBtn.addEventListener('click', function () {
    plusSlides(1, 'nextBtn')
  })
  showSlides(slideIndex, 'new')
  setInterval(() => {
    plusSlides(1, 'nextBtn')
  }, 10000)
})
