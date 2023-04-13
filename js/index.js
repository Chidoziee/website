const playBtn = document.querySelector(".play");
const ball = document.querySelector(".ball");
const scrollBtn = document.querySelector(".scrollup-con");
const control = document.querySelector("#control");
const links = document.querySelectorAll("ul.nav-links li a");
const activePage = window.location.href;
console.log(activePage);

// links.forEach(link => {
//   if(link.href.includes(`${activePage}`)) {
//     link.classList.add("active");
//   };
  

// });

control.addEventListener("click", () => {
  ball.classList.toggle("roll");
  if (control.classList.contains("fa-play")) {
    control.classList.add("fa-pause");
    control.classList.remove("fa-play");
  } else {
    control.classList.remove("fa-pause");
    control.classList.add("fa-play");
  }
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.opacity = 1;
    scrollBtn.style.transform = "translate(-20px)";
  } else {
    scrollBtn.style.opacity = 0;
    scrollBtn.style.transform = "translateY(0)";
  }
})

