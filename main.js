// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const sideNav = document.getElementById('side-nav');

    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });
});

// add Music

const music = new Audio('/bsongs/BaawlaSong1.mp3');
// music.play();

const songs = [
  {
    id: 1,
    songName: `Baawla<br> <div class="subtitle">Badshah</div>`,
    poster: "/songposters/176994.png"
  },
  {
    id: 2,
    songName: `O'Sajna <br> <div class="subtitle">Badshah</div>`,
    poster: "/songposters/176993.png"
  },
  {
    id: 3,
    songName: `Bhot Tej <br> <div class="subtitle">Badshah</div>`,
    poster: "/songposters/images (8).jpeg"
  }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
  } else {
    music.pause();
  }
})

console.log("Welcome to st.music! Develope By - Shivam Tiwari")