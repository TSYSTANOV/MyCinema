import {getTrendsForDay} from './services.js'
import renderCard from './renderCard.js'
import { getVideo } from './services.js'

let filmWeek = document.querySelector('.film-week')

function firstRender(data, keyVideo){
    let titleText = document.querySelector('.other-films__title')
    titleText.textContent = `В ТРЕНДЕ СЕЙЧАС`
    titleText.dataset.activeFilms = '/trending/all/week?language=ru-RU'
    titleText.dataset.type = 'all'
    filmWeek.style.display = 'block'
    titleText.dataset.page = '1'
    filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${data.vote_average.toFixed(1)}">
        <div class="film-week__poster-wrapper">
           <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}" alt="постер ${data.title}">
            <p class="film-week__title_origin">${data.original_title || data.original_name}</p>
            </div>
            <h2 class="film-week__title">${data.title ||data.name }</h2>
        <a class="film-week__watch-trailer tube" href=${keyVideo ? `https://youtu.be/${keyVideo}`: '#'} target='_blank' aria-label="смотреть трейлер"></a>
    </div>
    `
    // https:/s/www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path || data.poster_path}
}


async function renderVideo(){
    let btn = document.querySelector('.other-films__title_load-more')
    btn.style.display = 'block'

    let data = await getTrendsForDay()
    let [firstCard, ...otherCard] = data[0].results

    otherCard.length = 18
    let video = await getVideo(firstCard.id, firstCard.media_type)
   
    let key = video.results[video.results.length - 1].key
        
    firstRender(firstCard, key)
    renderCard([otherCard, 'all'])
}   

export default renderVideo

