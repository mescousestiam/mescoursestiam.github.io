
const titreSpans = document.querySelectorAll('h1 span');
const logo = document.querySelector('.logo');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused: true});

  TL
  .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
  .from(logo, 0.6, {transform: "scale(0)", ease: "power2.out"}, '-=2')
 

  TL.play();
});


// ajout dynamique de mon nav animé
const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1){
        navigation.classList.add('anim-nav');
    }else{
        navigation.classList.remove('anim-nav');
    }
});

//animation par l'evénement click

// window.addEventListener('click', (e) => {
//     // console.log(e);
    
//     const rond = document.createElement('div');
//         rond.className = 'clickAnim';
//          rond.style.top = `${e.pageY - 50}px`;
//          rond.style.left = `${e.pageX - 50}px`;
//          document.body.appendChild(rond);
    
//         setTimeout(() => {
//              rond.remove();
//          }, 1500)
//      });

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".liste");
// const links = document.querySelectorAll(".liste li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });
  

//animation du logo


