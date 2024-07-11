let listItem = document.querySelector("nav .navbar-ul");
let navbar = document.querySelector("nav .nav");
let lists = document.querySelectorAll("nav .navbar-ul li");
let dropDiv = document.querySelectorAll(".content-drop div.link-content");
let containerDropDiv = document.querySelector(".content-drop");
let item;

/**Drop Down menu list */
/**handle when Mouse Enter  li */
lists[3].addEventListener("mouseout", (e) => {
  e.currentTarget.classList.replace("before:w-full", "before:w-0");
  e.currentTarget.classList.replace("before:left-0", "before:right-0");
});
listItem.addEventListener("mouseover", (e) => {
  for (let i = 0; i < 4; i++) {
    item = lists[i];
    if (e.target == item || e.target == item.firstElementChild) {
      lists.forEach((list, index) => {
        list.classList.replace("before:w-full", "before:w-0");
        list.classList.replace("before:left-0", "before:right-0");
        if (index != 3) {
          containerDropDiv.classList.replace("opacity-1", "opacity-0");
          dropDiv[index].classList.replace("block", "hidden");
        }
      });
      item.classList.replace("before:w-0", "before:w-full");
      item.classList.replace("before:right-0", "before:left-0");
      if (i != 3) {
        dropDiv[i].classList.replace("hidden", "block");
        setTimeout(() => {
          containerDropDiv.classList.replace("opacity-0", "opacity-1");
        }, "10");
      }
    }
  }
});
/*handle when Mouse out  ul   and still in navbar*/
navbar.addEventListener("mouseover", (e) => {
  if (e.target == navbar && e.target != listItem) {
    lists.forEach((list, index) => {
      list.classList.replace("before:w-full", "before:w-0");
      list.classList.replace("before:left-0", "before:right-0");
      containerDropDiv.classList.replace("opacity-1", "opacity-0");
      setTimeout(() => {
        dropDiv[index].classList.replace("block", "hidden");
      }, "200");
    });
  }
});
/*handle when Mouse out  dropDown list */
containerDropDiv.addEventListener("mouseleave", () => {
  lists.forEach((list, index) => {
    list.classList.replace("before:w-full", "before:w-0");
    list.classList.replace("before:left-0", "before:right-0");
    containerDropDiv.classList.replace("opacity-1", "opacity-0");
    setTimeout(() => {
      dropDiv[index].classList.replace("block", "hidden");
    }, "200");
  });
});
/*************************************************** */
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  direction: "horizontal",
  loop: true,
  allowTouchMove: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/************************************************************** */
/** SideBar */
const close = document.querySelector(".close i");
const sidebar = document.querySelector(".sidebar");
const open = document.querySelector(".open-list");
const searchbar = document.querySelector(".search-bar");
const closeSearchbar = document.querySelector(".search i.close");
const searchIcon1 = document.querySelector(".searchicon1");
const searchIcon2 = document.querySelector(".searchicon2");
const fillter = document.querySelector(".fitter");
const emailContainer = document.querySelector(".email");
const closeEmail = document.querySelector(".cloe-email");
const emailCard = document.querySelector(".email-card");
const emailIcon = document.querySelector(".fa-envelope");
const bagSlider = document.querySelector(".bag-slide ");
const bagIcon = document.querySelector(".fa-bag-shopping ");
const closeCartIcon = document.querySelector(".close-cart");
const widthOfSidebar = sidebar.offsetWidth;
const widthOfSearchbar = searchbar.offsetWidth;
const widthOfbag = bagSlider.offsetWidth;

let flagleft = false;
/**close all sidebars */
sidebar.style.left = `${-widthOfSidebar}px`;
/**Check screen width to identify direction  */
let screenWidth = window.innerWidth;
if (screenWidth >= 1024) {
  searchbar.style.right = `${-widthOfSearchbar}px`;
  flagleft = false;
} else {
  searchbar.style.left = `${-widthOfSearchbar}px`;
  flagleft = true;
}
bagSlider.style.right = `${-widthOfbag}px`;
$(`.content-list .list-content`).slideUp(0);
$(".head").click((e) => {
  let icon = $(e.currentTarget).find("div .plus");
  rotateIcon(icon);
  $(e.currentTarget).next().slideToggle(300);
});
$(".list-item-head").click((e) => {
  let icon = $(e.currentTarget).find("div .plus");
  rotateIcon(icon);
  $(e.currentTarget).next().slideToggle(300);
});
close.addEventListener("click", closeSidebar);
open.addEventListener("click", openSidebar);
closeSearchbar.addEventListener("click", closeSearchbarfunc);
searchIcon1.addEventListener("click", () =>
  openSidebarofIcons(searchbar, "right")
);
searchIcon2.addEventListener("click", () =>
  openSidebarofIcons(searchbar, "left")
);
closeEmail.addEventListener("click", closeEmailScreen);
emailIcon.addEventListener("click", openEmailScreen);
bagIcon.addEventListener("click", () => openSidebarofIcons(bagSlider, "right"));
closeCartIcon.addEventListener("click", closeCart);

function closeSidebar() {
  sidebar.style.left = `${-widthOfSidebar}px`;
}
function openSidebar() {
  sidebar.classList.add("duration-1000");
  setTimeout(() => {
    sidebar.style.left = `${0}px`;
  }, 5);
}
function rotateIcon(icon) {
  icon.removeClass("rotate-mince");
  icon.removeClass("rotate-plus");
  if (icon.hasClass("fa-plus")) {
    icon.addClass("rotate-plus");
    setTimeout(() => {
      icon.removeClass("rotate-plus");
      icon.removeClass("fa-plus");
      icon.addClass("fa-minus");
    }, 250);
  } else {
    icon.addClass("rotate-mince");
    setTimeout(() => {
      icon.removeClass("rotate-mince");
      icon.removeClass("fa-minus");
      icon.addClass("fa-plus");
    }, 250);
  }
}
function closeSearchbarfunc() {
  if (flagleft) {
    searchbar.style.left = `${-widthOfSearchbar}px`;
    fillter.classList.replace("block", "hidden");
  } else {
    searchbar.style.right = `${-widthOfSearchbar}px`;
    fillter.classList.replace("block", "hidden");
  }
}
function openSidebarofIcons(element, property) {
  element.classList.add("duration-700");
  if (property == "left") {
    setTimeout(() => {
      fillter.classList.replace("hidden", "block");
      element.style.left = `${0}px`;
    }, 5);
  } else if (property == "right") {
    setTimeout(() => {
      fillter.classList.replace("hidden", "block");
      element.style.right = `${0}px`;
    }, 5);
  }
}
function closeEmailScreen() {
  emailCard.classList.replace("scale-1", "scale-0");
  emailCard.classList.replace("opacity-1", "opacity-0");
  setTimeout(() => {
    emailContainer.classList.replace("flex", "hidden");
  }, 150);
}
function openEmailScreen() {
  if (emailContainer.classList.contains("hidden")) {
    emailContainer.classList.replace("hidden", "flex");
    setTimeout(() => {
      emailCard.classList.replace("scale-0", "scale-1");
      emailCard.classList.replace("opacity-0", "opacity-1");
    }, 10);
  } else {
    closeEmailScreen();
  }
}
function closeCart() {
  fillter.classList.replace("block", "hidden");
  bagSlider.style.right = `-${widthOfbag}px`;
}
