const botaomobile = document.getElementById('botaomobile');


function toggleMenu(){
    const botaomobile = document.getElementById('nav');
    nav.classList.toggle('active')
   
}

botaomobile.addEventListener('click', toggleMenu);

var loader = document.getElementById('preloade');

function precarregamento(){
    loader.style.opacity="0";
    setTimeout(()=>{
        loader.style.display="none";
    }, 500);
}