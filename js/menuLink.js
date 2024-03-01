import {
    getPopular,
    getTop,
    getTrendsForDay
} from './services.js'
import renderCard from './renderCard.js'

let titleText = document.querySelector('.other-films__title')
let filmWeek = document.querySelector('.film-week')
let getNav = document.querySelectorAll('.get-nav')

function menuLink(){
    getNav.forEach((el)=>{
        el.addEventListener('click',()=>{
           
            console.log(event.target)
            const target= event.target.closest('.get-nav__link')
            if(target){
                event.preventDefault()
                filmWeek.style.display = 'none'
                titleText.textContent = target.textContent
                if(target.classList.contains('get-nav__link_popular-movies')){
                    getPopular('movie')
                    .then(data=> renderCard(data.results))
                }
                if(target.classList.contains('get-nav__link_popular-tv')){
                    getPopular('tv')
                    .then(data=> renderCard(data.results))
                }
                if(target.classList.contains('get-nav__link_top-movies')){
                    getTop('movie')
                    .then(data=> renderCard(data.results))
                }
                if(target.classList.contains('get-nav__link_top-tv')){
                    getTop('tv')
                    .then(data=> renderCard(data.results))
                }
                if(target.classList.contains('get-nav__link_triends')){
                    getTrendsForDay('all','week')
                    .then(data=> renderCard(data.results))
                }
            }

        })
    })
}

export default menuLink