const $headerPromo = document.querySelector('.header__promo')
const $logo = document.querySelector('.header__top-logo-link')
const headerPromoObserver = new IntersectionObserver( handlePromoIntersection, {
  threshold: 0.3
})

headerPromoObserver.observe($headerPromo)

function handlePromoIntersection(entries) {
  const entry = entries[0]
  if (entry.intersectionRatio < 0.3) {
    $logo.classList.add('header__top-logo-link-active');
  } else {
    $logo.classList.remove('header__top-logo-link-active');
  }
}

// We can use $headerPromo to do this but I prefer do something independent and with other tools
const $header = document.querySelector('.header')
let previusPosition = window.scrollY

window.onscroll = () => toggleMenuVisibility()

function toggleMenuVisibility() {
  const actualPosition = window.scrollY
  if ( previusPosition > 50 && actualPosition - previusPosition > 0 ){
    $header.classList.add('header--inactive')
  } else {
    $header.classList.remove('header--inactive')
  }
  previusPosition = actualPosition
  // console.log(`The actual position is ${actualPosition}, the previus is ${previusPosition}`)
}