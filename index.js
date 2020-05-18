const $buttonSuvNav = document.querySelectorAll('.menu-item__nav-title-container')
console.log($buttonSuvNav)
let toggleMove = 1

const $menu = document.querySelectorAll('.menu-item__title-container')

console.log($menu)

$menu.forEach($item => {
  $item.addEventListener('click', () => {
    moveElement($item.parentElement.children[1])
  })
})

$buttonSuvNav.forEach($item => {
  $item.addEventListener('click', () => {
    moveElement($item.parentElement)
  })
})

// element.styles.animationPlayState = "running"
// .move-nav-container{
//   display: block;
//   z-index: 2;
//   animation-direction: alternate;
//   animation-name: show-submenu-mobile;
//   animation-duration: 400;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in;
// }

// @keyframes show-submenu-mobile{
//   0%{
//     left: 100vw;
//   }
//   100%{
//     left: 0vw;
//   }
// }


// function moveElement($element){
//   if(toggleMove % 2 === 0){
    // $element.classList.add('move-nav-container')
    // $element.classList.remove('move-rigth')
    // console.log($element.classList);
    // setTimeout(() => {
    //   $element.classList.remove('move-left')
    //   console.log($element.classList);
    // }, 400);
  //   toggleMove += 1
  // } else {
    // $element.classList.add('move-rigth')
    // $element.classList.remove('move-left')
    // console.log($element.classList);
    // setTimeout(() => {
    //   $element.classList.remove('move-rigth')
    //   console.log($element.classList);
    // }, 400);
//     toggleMove += 1
//   }
// }

// .move-left{
//   display: block;
//   z-index: 2;
//   animation-name: show-submenu-mobile;
//   animation-duration: 4000ms;
//   animation-direction: reverse;
//   animation-iteration-count: 1;
//   animation-fill-mode: forwards;
//   animation-timing-function: ease-in;
// }
// /* .menu-item:hover .menu-item__content-container */
// .move-rigth{
//   display: block;
//   z-index: 2;
//   animation-direction: normal;
//   animation-name: show-submenu-mobile;
//   animation-duration: 4000ms;
//   animation-iteration-count: 1;
//   animation-fill-mode: forwards;
//   animation-timing-function: ease-in;
// }
// @keyframes show-submenu-mobile{
//   0%{
//     left: 100vw;
//   }
//   100%{
//     left: 0vw;
//   }
// }

const $section = document.querySelector('#content_grid-7')
const links = $section.querySelectorAll('a')
let arr = []
links.forEach(item => arr.push(item.href))
console.log(arr)