const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
navItem = document.querySelector(".nav-item li");

//   closeButton = document.querySelector('.nav-close-b');

// if constants exists//
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    // alert('im clicked');
  });
}

var icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}
let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "img/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "img/sun.png";
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "img/moon.png";
    localStorage.setItem("theme", "light");
  }
};

//.................skills................//

const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
//scroll//
const sections = document.querySelectorAll("section[id]");

function scrollActivity() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActivity);

//.......Send email.........//
