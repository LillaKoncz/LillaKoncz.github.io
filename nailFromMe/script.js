const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');


burger.addEventListener('click', ()=>{
  burger.classList.toggle('active'); 
  navMenu.classList.toggle('active');
});



const observer = new IntersectionObserver(entries => { entries.forEach(entry => {
  if(entry.isIntersecting){
    document.querySelector(".welcome").classList.add("fadeIn");
    }
  })
});

observer.observe(document.querySelector(".text"));




