const openMenu = (elem, clas)=>{
    elem.classList.add(clas)
}
const closeMenu = (elem, clas)=>{
    elem.classList.remove(clas)
}


const slideMenu = ({openBtn, menu, classActiveMenu, closeBtn, closeTrigger}) => {
    const burgerBtn = document.querySelector(openBtn)
    const navigation = document.querySelector(menu)
    const burgerCloseBtn = document.querySelector(closeBtn) 
    const navigationList = document.querySelectorAll(closeTrigger)

    burgerBtn.addEventListener('click',()=>{
        openMenu(navigation, classActiveMenu)
        
    })

    burgerCloseBtn.addEventListener('click',()=>{
        closeMenu(navigation, classActiveMenu)
    })

    navigationList.forEach((item)=>{
        item.addEventListener('click',()=>{
            closeMenu(navigation, classActiveMenu)
        })
    })

}

export default slideMenu;