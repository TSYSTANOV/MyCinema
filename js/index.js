import slideMenu from "./menu.js";
import renderVideo from './renderVideo.js'
import menuLink from "./menuLink.js";
import headerSlide from './header.js'

let settings=
{
    'openBtn':'.header__burger-btn', 
    'menu' :'.navigation', 
    'classActiveMenu': 'navigation_active', 
    'closeBtn':'.navigation__close', 
    'closeTrigger':'.navigation__link'
}
slideMenu(settings)

headerSlide()

renderVideo()

menuLink()

