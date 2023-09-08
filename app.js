let prevScrollPos = window.pageYOffset;
const div1 = document.getElementById('reveal-div1');
const div2 = document.getElementById('reveal-div2');
const div3 = document.getElementById('reveal-div3');
const div4 = document.getElementById('reveal-div4');

const reveal1 = div1.offsetTop - window.innerHeight + 100;
const reveal2 = div2.offsetTop - window.innerHeight + 100;
const reveal3 = div3.offsetTop - window.innerHeight + 100;
const reveal4 = div4.offsetTop - window.innerHeight + 100;

const img = document.querySelector('.img');

div1.style.opacity = 0;
div2.style.opacity = 0;
div3.style.opacity = 0;
div4.style.opacity = 0;
  

const showDiv = (element, revealPosition, newImageSrc) => {
  const windowScrollY = window.pageYOffset;

  if (windowScrollY > revealPosition) {
    const elementOffsetTop = element.offsetTop - 100;

    if (Math.abs(windowScrollY - elementOffsetTop) <= 100) {
      element.style.opacity = Math.min(parseFloat(element.style.opacity), 1) + 0.2;
      img.style.opacity = 1;

    } else {
      element.style.opacity = Math.max(parseFloat(element.style.opacity), 0.2) - 0.2;
      img.style.opacity = 0.8;
    }

    img.classList.add('transition');
    img.src = newImageSrc;
  }
}

const handleScrollForHeader = () => {
  
  if (window.scrollY < 1000) {
    document.querySelector('.header-scroll').style.top = '-120px';
    return;
  }

  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.header-scroll').style.top = '0';
  } else {
    setTimeout(() => {
      document.querySelector('.header-scroll').style.top = '-120px';
    }, 3000);
  }
  prevScrollPos = currentScrollPos;

  //CONTAINER-6 ANIMATION
  if(window.innerWidth < 960) {
    div1.style.opacity = 1;
    div2.style.opacity = 1;
    div3.style.opacity = 1;
    div4.style.opacity = 1;
    return;
  }
  
  showDiv(div1, reveal1, './assets/animation-1.webp');
  showDiv(div2, reveal2, './assets/animation-2.webp');
  showDiv(div3, reveal3, './assets/animation-3.webp');
  showDiv(div4, reveal4, './assets/animation-1.webp');
}


const handleScrollForAnimation = () => {
  const container2 = document.querySelector('.container-2'),
        cPosition = container2.offsetTop - window.innerHeight + 100;

  if (window.pageYOffset > cPosition) {

    const mobileElements = document.querySelectorAll('.mobile');
    mobileElements.forEach((element, index) => {

      element.style.animation = `mobileAnimation${index+1} 1.5s 0.5s forwards`;
      element.style.animationPlayState = 'running';
    });
    
    window.removeEventListener('scroll', handleScrollForAnimation);
  }
}


window.addEventListener('scroll', handleScrollForAnimation);
window.addEventListener('scroll', handleScrollForHeader);