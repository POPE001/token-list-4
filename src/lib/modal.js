export const HandleModal = (id)=>{
    const modal = document.getElementById(id)
    if (modal.classList.contains('active')){
        modal.classList.remove('active')
        return
    }
    modal.classList.add('active')
    
}