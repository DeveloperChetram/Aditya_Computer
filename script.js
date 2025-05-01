let menu= document.getElementById('menu')
let close=document.getElementById('close')
let navlist= document.getElementById('navlist')
let more= document.getElementsByClassName('more')
menu.addEventListener('click',function(){

  
    navlist.classList.add('nav-show')
    more.classList.add('more_button_show')

})



close.addEventListener('click',function(){
    navlist.classList.remove('nav-show')
})