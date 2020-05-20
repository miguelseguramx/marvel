const $body = document.querySelector('body')
const $menu = document.querySelector('.menu')
const $openMenu = document.querySelector('.burguer-menu')
const $closeMenu = document.querySelector('.menu__close-img')
const $moreMenu = document.getElementById('moreMenu')
const media = window.matchMedia('(max-width: 839px)')
const $menuItems = document.querySelectorAll('.menu-item__title-container')
const $goBackMenuButtons = document.querySelectorAll('.menu-item__nav-title-container')
const $scrollArea = document.querySelector('.menu__scroll-area')

$openMenu.addEventListener('click', () => {
  moveSomeMenu($menu, '-100%', '0', null)
  $body.style.overflow = 'hidden'
  $body.style.maxHeight = '100vh'
})
$closeMenu.addEventListener('click', () => {
  moveSomeMenu($menu, '0%', '-100%', null)
  $body.style.overflow = 'initial'
  $body.style.maxHeight = 'initial'
  $scrollArea.style.height = '40px'
})
$menuItems.forEach($menuItem => {
  const $menuContent = $menuItem.parentElement.childNodes[3]
  $menuItem.addEventListener('click', () => {
    $menuContent.style.display = 'block'
    moveSomeMenu($menuContent, '100%', '0', 'hide')
  })
})
$goBackMenuButtons.forEach($goBackMenuButton => {
  const $menuContent = $goBackMenuButton.parentElement
  $goBackMenuButton.addEventListener('click', () => {
    setTimeout(() => {
      $menuContent.style.display = 'none'
    }, 500);
    moveSomeMenu($menuContent, '0', '100%', 'show')
  })
})  

function moveSomeMenu(itemToAnimate, start, end, stateToBe) {
  console.log(itemToAnimate, start, end, stateToBe)
  itemToAnimate.animate([
    {
      left: `${start}`
    },
    {
      left: `${end}`
    }
  ],{
    duration: 500,
    easing: 'ease-in',
    fill: 'forwards'
  })
  if( stateToBe === 'hide' ) hideEveryThing()
  if( stateToBe === 'show' ) showEveryThing()
}
function hideEveryThing(){
  $moreMenu.style.display = 'none'
  $scrollArea.style.height = '100vh'
}
function showEveryThing(){
  $moreMenu.style.display = 'block'
  $scrollArea.style.height = '1400px'
}