const API_KEY = '01abc79712043426f57a6135c50e0176'
const BASE_URL = 'https://api.themoviedb.org/3'



function getData(url){
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWFiYzc5NzEyMDQzNDI2ZjU3YTYxMzVjNTBlMDE3NiIsInN1YiI6IjY1YmU2MWM1OTMxZWExMDBjOTk5YzhjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZHdKVEPrV0syXnjwGnqD8hUPUJeUV0zmClH3ZIalo9w'
    }
  };
  
  return fetch(`${BASE_URL}${url}`, options)
    .then(response => {if(response.ok){
      return response.json()
    }
    throw `Something going wrong... Error ${response.status}`
    })
    .then(response => response)
    .catch(error=>{
      console.log(`Error: ${error}`)
    })
}
export const getTrendsForDay = async (type = 'all', period='day', page = 1) =>{
  let data = await getData(`/trending/${type}/${period}?language=ru-RU&page=${page}`)
  return [data, type]
}

export const getTop = async (type = 'movie', page = 1) =>{
  return [await getData(`/${type}/top_rated?language=ru-RU&page=${page}`),type]
}

export const getPopular = async (type = 'movie', page = 1) => {
  return [await getData(`/${type}/popular?language=ru-RU&page=${page}`),type]
}

export const getVideo = async (id, type = 'tv') =>{
  return await getData(`/${type}/${id}/videos?language=en-US`)
}
// https://api.themoviedb.org/3/search/person?include_adult=false&language=ru-RU&page=1

export const search = async (quary, page = 1)=>{
  return await getData(`/search/multi?query=${quary}&include_adult=false&language=ru-RU&page=${page}'`)
}