let audio = document.querySelector('audio')
let videos = document.querySelector('.videos')
let randomizer = document.querySelector('button');

randomizer.addEventListener('click', () => {
   audio.volume = Math.random();
});

// Swipe
let videoList = [
  "./assets/video/demi.mov",
  "./assets/video/john.mp4"
];

videos.addEventListener('click', (e) => {
  // hiode current video
  let video = document.querySelector('video');
  video.src=videoList[0];
  videoList.push(videoList.shift())
});


