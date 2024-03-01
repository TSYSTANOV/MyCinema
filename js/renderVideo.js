import {getTrendsForDay} from './services.js'
import renderCard from './renderCard.js'

let filmWeek = document.querySelector('.film-week')

function firstRender(data){
    filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${data.vote_average.toFixed(1)}">
        <div class="film-week__poster-wrapper">
           <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}" alt="постер ${data.title}">
            <p class="film-week__title_origin">${data.original_title || data.original_name}</p>
            </div>
            <h2 class="film-week__title">${data.title ||data.name }</h2>
        <a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M" aria-label="смотреть трейлер"></a>
    </div>
    `
}


async function renderVideo(){
    let data = await getTrendsForDay()
    let [firstCard, ...otherCard] = data.results
    otherCard.length = 16
    firstRender(firstCard)
    renderCard(otherCard)
}

export default renderVideo

