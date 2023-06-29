const optionalFields = document.querySelectorAll("[data-optional]")
const imgPosts = document.querySelectorAll("[data-img-post]")
const unreadItems = document.querySelectorAll("[data-item-unread]")
const newMsgNumber = document.querySelector("[data-unread-number]")
const markAll = document.querySelector("[data-mark-all]")

newMsgNumber.textContent = unreadItems.length.toString()
unreadItems.forEach(item=>{
    item.querySelector("[data-new-msg-dot]").classList.add("notification__new-msg-dot--show")
})

markAll.addEventListener("click", ()=>{
   renderReadAll()
})

markAll.addEventListener("keydown", e=>{
    if (e.keyCode === 13){
        renderReadAll()
    }

})


optionalFields.forEach(field => {
    if (field.innerText.trim() === ""){
        field.style.display = "none"
    }
})

imgPosts.forEach(img=>{
    if (img.src === 'data:,'){
        img.style.display = "none"
    }
})

function renderReadAll(){
    newMsgNumber.textContent = "0"
    unreadItems.forEach(item=>{
        item.querySelector("[data-new-msg-dot]").classList.remove("notification__new-msg-dot--show")
    })
}