import { getVideo } from "./services.js"

const listCard = document.querySelector('.other-films__list')

const renderCard = (data, loadMore = false) => {
    if(!loadMore){
        listCard.textContent = ''
    }
    let elems = Array.isArray(data[0]) ? data[0] : data[0].results
    
    Promise.all(elems.map(async(el)=>{
        let video = null 
        let key = null
        if(!(el.media_type === 'person')){
            video = await getVideo(el.id, data[1] === 'all' ? el.media_type : data[1])
            
            key = video.results[0] ? video.results[0].key : '!#'
        }
     
        let card = document.createElement('li')
        card.className = 'other-films__item'
        card.innerHTML = `
        <a class="other-films__link" target='${key === '!#'? '_self' : '_blank'}' data-rating="${el.vote_average ? el.vote_average.toFixed(1) : '-'}" >
            <img class="other-films__img" src=${el.poster_path || el.profile_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path || el.profile_path}`: 'img/noposter.jpg'} alt="постер ${el.title || el.name}">
        </a>`
        if(key !== '!#'){
            card.querySelector('a').setAttribute('href',`https://youtu.be/${key}`)
        }
        return card
    
    }))
    .then(data=>{
        listCard.append(...data)
    })
}

export default renderCard