const card = document.querySelector(".card")
const container = document.querySelector(".container")
const logo = document.querySelector(".logo")
const role = document.querySelector(".role")
const description = document.querySelector(".description")
const contact = document.querySelector(".contact")
container.addEventListener("mousemove",(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/15;
    let yAxis = (window.innerHeight / 2 -e.pageY)/15;
    card.style.transform = `rotateY(${xAxis}deg) rotate(${yAxis}deg)`
})

container.addEventListener("mouseenter",(e)=>{
    card.style.transition="none";
    //Popout
    logo.style.transform="translateZ(200px) rotate(-360deg)"
    role.style.transform="translateZ(150px)";
    description.style.transform="translateZ(150px)"
    contact.style.transform="translateZ(150px)"
})

container.addEventListener("mouseleave",(e)=>{
    card.style.transition="all 0.3s ease";
    //Popout
    card.style.transform="rotateY(0deg) rotateX(0deg)"
    logo.style.transform="translateZ(0px) rotate(0deg)"
    role.style.transform="translateZ(0px)";
    description.style.transform="translateZ(0px)"
    contact.style.transform="translateZ(0px)"
})