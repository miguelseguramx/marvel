const $HeroButtons = document.querySelectorAll('.master-hero__overlay-titles-item')
const $HeroProgressBar = document.querySelector('.master-hero__overlay-progress')
const $HeroCarousel = document.querySelectorAll('.master-hero__carousel-img')[0]

let counter = 0

let interval = setInterval(() => {
  createAnimation()
}, 4000);

function createAnimation() {
  if (counter === 5 ) counter = 0

  $HeroButtons.forEach(($HeroButton, index) => {
    if (index === counter) {
      $HeroButton.style.color = 'var(--red-marvel)'
    } else {
      $HeroButton.style.color = 'black'
    }
  })

  $HeroProgressBar.animate([
    {
      left: `calc(calc(19.2% * ${counter}) + 20px)`,
      width: '0%'
    },
    {
      left: `calc(calc(19.2% * ${counter}) + 20px)`,
      width: '19.2%'
    }
  ],{
    duration: 4000,
    easing: 'ease-in',
    iterations: 'Infinity'
  })
  if (counter < 4 ) {
    $HeroCarousel.animate([
      { 
        left: `${counter * -100}vw`, 
        opacity: 1,
        offset: 0
      },
      { 
        left: `${counter * -100}vw`, 
        opacity: 1,
        offset: 0.95
      },
      {
        left: `${(counter + .6) * -100}vw`,
        opacity: .5,
        offset: 0.975
      },
      {
        left: `${(counter + 1) * -100}vw`,
        opacity: 1,
        offset: 1
      }
    ],{
      duration: 4000,
      easing: 'ease-in-out',
      iterations: 'Infinity'
    })
  } else {
    $HeroCarousel.animate([
      { 
        left: `${counter * -100}vw`,
        opacity: 1,
        offset: 0
      },
      { 
        left: `${counter * -100}vw`,
        opacity: 1,
        offset: 0.95
      },
      {
        left: `${-400 * .6}vw`,
        opacity: .5,
        offset: 0.975
      },
      {
        left: `0vw`,
        opacity: 1,
        offset: 1
      }
    ],{
      duration: 4000,
      easing: 'ease-in-out',
      iterations: 'Infinity'
    })
  }
  counter++
}

createAnimation()

$HeroButtons.forEach(($HeroButton, index) => {
  $HeroButton.addEventListener('click', () => {
    clearInterval(interval)
    counter = index
    createAnimation()
    interval = setInterval(() => {
      createAnimation()
    }, 4000);
  })
})
