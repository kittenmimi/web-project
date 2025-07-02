// Header Scroll
const header = document.querySelector('#header')

header.addEventListener('mouseenter', function() {
   header.classList.add('scroll');
})
header.addEventListener('mouseleave', function() {
   header.classList.remove('scroll');
})

// Gnb fix, toggle
const dep1 = document.querySelectorAll('#gnb > ul > li');

dep1.forEach((item) => {
  const dep2 = item.querySelector('ul');
  if (!dep2) return;

  item.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    dep1.forEach((li) => li.classList.remove('active'));
    item.classList.toggle('active');
  });
});

document.addEventListener('click', () => {
  dep1.forEach((li) => li.classList.remove('active'));
});

// Language
// const btnLang = document.querySelector('.header-util .lang-wrap button')
// const langWrap = document.querySelector('.header-util .lang-wrap')

// btnLang.addEventListener('click', function() {
//    langWrap.classList.toggle('active')
//    // searchbox 안보임
//    document.querySelector('#header').classList.add('scroll')
// })

// Main Lineup Swiper
const lineupSwiper = new Swiper('.main-lineup .lineup-swiper', {
  loop: true,
  navigation: {
    nextEl: '.main-lineup .swiper-button-next',
    prevEl: '.main-lineup .swiper-button-prev',
  },
  pagination: {
    el: '.main-lineup .swiper-pagination',
    clickable: true,
  },
  speed: 600,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Promise Swiper
const PromiseSwiper = new Swiper('.promise-content .promise-swiper', {
  loop: true,
  navigation: {
    nextEl: '.promise-content .swiper-button-next',
    prevEl: '.promise-content .swiper-button-prev',
  },
  pagination: {
    el: '.promise-content .swiper-pagination',
    clickable: true,
  },
  speed: 600,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Brand Story Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

// start
gsap.to(".story-bg", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".story-content",
    start: "top bottom",
    end: "top top",
    scrub: true,
  }
});

// story-title
gsap.to(".story-title", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".story-title",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  }
});

// story-txt-1
gsap.to(".story-txt-1", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".story-txt-1",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  }
});

// story-txt-2
ScrollTrigger.create({
  trigger: ".story-txt-2",
  start: "top 70%",
  end: "top 40%",
  onEnter: () => document.querySelector(".story-bg").classList.add("bg-change"),
  onLeaveBack: () => document.querySelector(".story-bg").classList.remove("bg-change"),
});

gsap.to(".story-txt-2", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".story-txt-2",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  }
});

// promise-title
gsap.to(".promise-title", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".promise-title",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
    onEnter: () => {
      document.querySelector(".story-bg").style.opacity = "0";
    },
    onLeaveBack: () => {
      document.querySelector(".story-bg").style.opacity = "1";
    },
  }
});

// scroll arrow icon
ScrollTrigger.create({
  trigger: ".sf-story",
  start: "top center",
  end: "bottom top",
  toggleClass: { targets: ".sf-story", className: "show-icon" }
});
