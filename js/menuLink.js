import {
    getPopular,
    getTop,
    getTrendsForDay
} from './services.js'
import renderCard from './renderCard.js'

let titleText = document.querySelector('.other-films__title')
let filmWeek = document.querySelector('.film-week')
let getNav = document.querySelectorAll('.get-nav')
let btn = document.querySelector('.other-films__title_load-more')

function menuLink(){
    getNav.forEach((el)=>{
        el.addEventListener('click',()=>{
           
           
            const target= event.target.closest('.get-nav__link')
            if(target){
                event.preventDefault()
                btn.style.display = 'block'
                filmWeek.style.display = 'none'
                titleText.textContent = target.textContent
                if(target.classList.contains('get-nav__link_popular-movies')){
                    getPopular('movie')
                    .then(data=> renderCard(data))
                    titleText.dataset.activeFilms = '/movie/popular?language=ru-RU'
                    titleText.dataset.type = 'movie'
                }
                if(target.classList.contains('get-nav__link_popular-tv')){
                    getPopular('tv')
                    .then(data=> renderCard(data))
                    titleText.dataset.activeFilms = '/tv/popular?language=ru-RU'
                    titleText.dataset.type = 'tv'
                }
                if(target.classList.contains('get-nav__link_top-movies')){
                    getTop('movie')
                    .then(data=> {
                        renderCard(data)})
                        titleText.dataset.activeFilms = '/movie/top_rated?language=ru-RU'
                        titleText.dataset.type = 'movie'
                }
                if(target.classList.contains('get-nav__link_top-tv')){
                    getTop('tv')
                    .then(data=> renderCard(data))
                    titleText.dataset.activeFilms = '/tv/top_rated?language=ru-RU'
                    titleText.dataset.type = 'tv'
                }
                if(target.classList.contains('get-nav__link_triends')){
                    getTrendsForDay('all','week')
                    .then(data=> renderCard(data))
                    titleText.dataset.activeFilms = '/trending/all/week?language=ru-RU'
                    titleText.dataset.type = 'all'
                }
                titleText.dataset.page = '1'
            }

        })
    })

}

export {menuLink}