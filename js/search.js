import { search as searchGet } from "./services.js"
import renderCard from "./renderCard.js"

let titleText = document.querySelector('.other-films__title')
let filmWeek = document.querySelector('.film-week')
let searchForm = document.querySelector('.header__search-form')
let searchInput = document.querySelector('.header__search-input')

const search = ()=>{
    searchForm.addEventListener('submit',()=>{
        event.preventDefault()
        if(!searchInput.value) return
        searchGet(searchInput.value)
        .then(data=>{
            if(data.results.length === 0){
                titleText.textContent = `По Вашему запросу: "${searchInput.value}" - ничего не найдено.` 
            }else{
                titleText.textContent = `Результаты поиска по запросу: "${searchInput.value}"`
            }
            searchInput.value = ''
            filmWeek.style.display = 'none'
            renderCard([data, 'all'])
        })
    })
    
}

// renderCard([otherCard, 'all'])

export default search