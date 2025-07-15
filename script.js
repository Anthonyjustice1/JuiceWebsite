const menu = document.querySelector("#menu");
const navList = document.querySelector('header nav .navList')

// menu.addEventListener('click', ()=>{
//   if(navList.style.right = '0') {
//     navList.style.right == '-100%'
//   }
// })

menuList.style.right = "-100%";

menu.addEventListener("click", () => {
  menuList.style.right = menuList.style.right === "0%" ? "-100%" : "0%";
});
