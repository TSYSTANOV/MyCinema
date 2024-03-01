
const listCard = document.querySelector('.other-films__list')

const renderCard = async(data) => {
    listCard.textContent = ''

    data.forEach((el)=>{
        let card = document.createElement('li')
        card.className = 'other-films__item'
        card.innerHTML = `
        <a class="other-films__link" data-rating="${el.vote_average ? el.vote_average.toFixed(1) : '-'}" href='#'>
            <img class="other-films__img" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}" alt="постер ${el.title || el.name}">
        </a>`
        listCard.append(card)
    })
}

export default renderCard