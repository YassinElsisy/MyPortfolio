// declaration section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Animation
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((element) => observer.observe(element));

// Menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// active navbar & sticky header
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 1800);

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for Animation scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

// LIGHT MODE
let lightMode = document.querySelector("#lightMode-icon");

lightMode.onclick = () => {
  if (lightMode.classList.contains("bx-sun")) {
    lightMode.classList.remove("bx-sun");
    lightMode.classList.add("bx-moon");
    document.body.classList.add("light-mode");
    document.getElementById("home").style.backgroundImage =
      "url('images/light-bg.jpg')";
  } else if (lightMode.classList.contains("bx-moon")) {
    lightMode.classList.remove("bx-moon");
    lightMode.classList.add("bx-sun");
    document.body.classList.remove("light-mode");
    document.getElementById("home").style.backgroundImage =
      "url('images/dark-bg.jpg')";
  }
};

// Magnetic Button
const button = document.getElementsByClassName("magnetic");

window.addEventListener("mousemove", (el) => {
  const position = button.getBoundingClientRect();
  const x = el.pageX - position.left - position.width / 2;
  const y = el.pageY - position.top - position.height / 2;

  const distTop = position.top + button.clientHeight / 2 - el.y;
  const distLeft = position.left + button.clientWidth / 2 - el.x;

  const distance = Math.sqrt(distTop * distTop + distLeft * distLeft);

  console.log(distance);

  if (distance < 150) {
    button.style.transform = "translate(" + x * 0.4 + "px, " + y * 0.5 + "px)";
  } else {
    button.style.transform = "translate(0,0)";
  }
});
