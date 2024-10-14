// console.log('hatim')

// const slides = document.querySelector('.custom-slider .slides');
//     const slide = document.querySelectorAll('.custom-slider .slide');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');
//     let index = 0;

//     function showSlide(n) {
//         if (n >= slide.length) {
//             index = 0;
//         } else if (n < 0) {
//             index = slide.length - 1;
//         }
//         slides.style.transform = `translateX(${-index * 100}%)`;
//     }

//     prevButton.addEventListener('click', () => {
//         index--;
//         showSlide(index);
//     });

//     nextButton.addEventListener('click', () => {
//         index++;
//         showSlide(index);
//     });

//     // Optional: Auto slide every 5 seconds
//     setInterval(() => {
//         index++;
//         showSlide(index);
//     }, 5000);