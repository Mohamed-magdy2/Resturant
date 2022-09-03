let www = document.querySelector('#second-section')

window.onscroll = function hello() {
    if(scrollY = 660 ){
        www.style.opacity = 1
    }
    else if(scrollY !=220){
        www.style.opacity = 0
    }
  
}

let ourMenu = document.getElementById('our-menu')
console.log(ourMenu);

ourMenu.onclick = function(){
    scroll({
        
        behavior:'smooth'
    })
}

// let con = document.querySelector(".container-1").onToggle = function (){
//     mob.style.opacity = 1
// }




let mob = document.getElementById("nav-mob")







function myFunction(x) {
    if( x.classList.toggle("change")){
        mob.style.opacity = 1
        mob.style.transition = "0.9s"
    }
   
    else{
        mob.style.opacity = 0
        mob.style.transition = "0.9s"
    }

    
}