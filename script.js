const menubtn = document.querySelector('#menuIcon');
const closebtn = document.querySelector('#closeIcon');
const navlist = document.querySelector('nav .navList');
console.log(closebtn);

menubtn.addEventListener('click', (e)=> {
if (e.target.id === 'menuIcon' && navlist.style.right === '-105%') {
    navlist.style.right ='-50%';
    menubtn.style.display = 'none';
    // menubtn.style.transition = '0.3s ease';
    closebtn.style.display = 'block';
} else {
    navlist.style.right = '-105%';
}
})

closebtn.addEventListener('click', (e)=> {
    if (e.target.id === 'closeIcon' && navlist.style.right === '-50%') {
        navlist.style.right = '-105%';
        closebtn.style.display = 'none';
        menubtn.style.display = 'block';
    } else {
        navlist.style.right ='-50%';
    }
})