let text = document.getElementById('text')
let Mountain1 = document.getElementById('Mountain1')
let Mountain2 = document.getElementById('Mountain2')
let Mountain3 = document.getElementById('Mountain3')
let Mountain4 = document.getElementById('Mountain4')

window.addEventListener('scroll', ()=>{
    let value = window.scrollY

    text.style.marginTop = value * 2.5 +'px';
    Mountain1.style.left = value * 1 +'px';
    Mountain2.style.top = value * -1.5 +'px';
    Mountain3.style.left = value * -1.5 +'px';
    Mountain4.style.left = value * 1.5 +'px';

})