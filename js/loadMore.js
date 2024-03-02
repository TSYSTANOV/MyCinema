import renderCard from "./renderCard.js"
import getData from "./services.js"

let titleText = document.querySelector('.other-films__title')
let btn = document.querySelector('.other-films__title_load-more')

function loadMoreFilms(){
            btn.addEventListener('click', async()=>{
                console.log(titleText.dataset.page)
                titleText.dataset.page++
                let type = titleText.dataset.type
                let data = await getData(`${titleText.dataset.activeFilms}&page=${titleText.dataset.page}`)
                renderCard([data, type], true)
            })
}
export {loadMoreFilms}
