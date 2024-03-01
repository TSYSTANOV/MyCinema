import renderVideo from "./renderVideo.js"

let header = document.querySelector('.header')
let height = header.getBoundingClientRect().height
    header.style.top = `-${height}px`

function headerSlide(){
    let scrollParam = 0
    let up = false
    document.addEventListener('scroll',()=>{
        if(scrollY < scrollParam)
        {
            up = true
        }else{
            up = false
        }
        scrollParam = scrollY
        if(up){
            header.style.top = `0px`
        }else{
            height = header.getBoundingClientRect().height
            header.style.top = `-${height}px`
        }
    })
}

let headerLogo = document.querySelector('.header__logo')
headerLogo.addEventListener('click', renderVideo)




export default headerSlide