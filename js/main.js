new Swiper('.best-item .swiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// const header = document.querySelector('.nav-wrap');
// // const lastScrollTop = window.scrollY;
// console.log(lastScrollTop)
// function scrollEvent() {
//   let lastScrollTop = 0;
//   window.addEventListener('scroll', () => {
//     let scrollTop = document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//       header.style.height = '0px';
//     } else {
//       header.style.height = '80px';
//     }
//   })
// }

// lastScrollTop = scrollTop
let lastScrollTop = 0;

  window.addEventListener('scroll', function (event) {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.querySelector('header');

      if (scrollTop > lastScrollTop) {
          header.style.top = '-124px';
      } else {
          header.style.top = '-44px';
      }

      lastScrollTop = scrollTop;

      // 스크롤 위치가 0일 때 헤더를 화면 상단에 고정
      if (scrollTop === 0) {
          header.style.top = '0';
      }
  });