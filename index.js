const $body = document.querySelector('body')
const $menu = document.querySelector('.menu')
const $openMenu = document.querySelector('.burguer-menu')
const $closeMenu = document.querySelector('.menu__close-img')
const $moreMenu = document.getElementById('moreMenu')
const $menuItems = document.querySelectorAll('.menu-item__title-container')
const $goBackMenuButtons = document.querySelectorAll('.menu-item__nav-title-container')
const $scrollArea = document.querySelector('.menu__scroll-area')

function activeTheMenu() {
  $openMenu.addEventListener('click', showAllMenu)
  $closeMenu.addEventListener('click', hideAllMenu)
  $menuItems.forEach($menuItem => {
    $menuItem.addEventListener('click', showSubMenu)
  })
  $goBackMenuButtons.forEach($goBackMenuButton => {
    $goBackMenuButton.addEventListener('click', hideSubMenu)
  })
}
function desactiveTheMenu() {
  $openMenu.removeEventListener('click', showAllMenu)
  $closeMenu.removeEventListener('click', hideAllMenu)
  $menuItems.forEach($menuItem => {
    $menuItem.removeEventListener('click', showSubMenu)
    const $subMenuContent = $menuItem.parentElement.childNodes[3]
    moveSomeMenu($subMenuContent, '100%', '0')
    $subMenuContent.removeAttribute('style')
  })
  $goBackMenuButtons.forEach($goBackMenuButton => {
    $goBackMenuButton.removeEventListener('click', hideSubMenu)
  })
}
function addMenuInteractivity(screen){
  if (screen.matches) {
    activeTheMenu()
  } else {
    desactiveTheMenu()
  }
}
function showAllMenu() {
  moveSomeMenu($menu, '-100%', '0', null)
  $body.style.overflow = 'hidden'
  $body.style.maxHeight = '100vh'
}
function hideAllMenu() {
  moveSomeMenu($menu, '0%', '-100%', null)
  $body.style.overflow = 'initial'
  $body.style.maxHeight = 'initial'
  $scrollArea.style.height = '40px'
}
// Lo haremos asi por que si usamos funciones anonimas, en cada evento se creara un nueva referencia a la funcion y no podremos 
// eliminar el evento, es mejor rastrear el origen del click que remplazar nodos con cada click
function showSubMenu(e) {
  let $menuContent = null
  if(e.path.length === 10){
    // You don't know where the user is going to touch
    $menuContent = e.path[1].childNodes[3]
  } else {
    $menuContent = e.path[2].childNodes[3]
  }
  $menuContent.style.display = 'block'
  moveSomeMenu($menuContent, '100%', '0', 'hide')
}
function hideSubMenu(e) {
  let $menuContent = null
  if(e.path.length === 11){
    $menuContent = e.path[2].childNodes[3]
  } else {
    $menuContent = e.path[3].childNodes[3]
  }
  setTimeout(() => {
    $menuContent.style.display = 'none'
  }, 500);
  moveSomeMenu($menuContent, '0', '100%', 'show')
}
function moveSomeMenu(itemToAnimate, start, end, stateToBe) {
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

const tabletOfSmaller = window.matchMedia('(max-width: 839px)')
tabletOfSmaller.addListener(addMenuInteractivity)

if(tabletOfSmaller.matches){
  activeTheMenu()
}