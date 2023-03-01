const myOverLayEl = document.getElementsByClassName('overlay')[0]
const links = document.getElementsByClassName('a')
const closeBtn = document.querySelector('.closebtn')
const navbarBtn = document.querySelector('.burger')

closeBtn.addEventListener('click', closeNavbar)
navbarBtn.addEventListener('click', openNav)

for(let i=0; i<links.length; i++) {
    links[i].addEventListener('click', closeNavbar)
}
function openNav() {
    myOverLayEl.style.width = "100%"
}

function closeNavbar() {
    myOverLayEl.style.width = "0"

}


// slider
var i = 0;
var images = [];
var time = 1500;

images[0] = './images/IMAGE (1).png'
images[1] = 'images/IMAGE (2).png'
images[2] = 'images/IMAGE (3).png'
images[3] = 'images/IMAGE (4).png'


function changeImg() {
    document.getElementById('slide').src = images[i]

    if (i < images.length - 1) {
        i++
    }
    else {
        i = 0
    }
    setTimeout('changeImg()', time)
}

window.onload = changeImg;