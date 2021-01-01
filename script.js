const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//播放和暂停视频
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//更新播放的按钮
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class = 'fa fa-play fa-2x'>`;
  } else {
    play.innerHTML = `<i class = 'fa fa-pause fa-2x'>`;
  }
}

//更新进度条和时间
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //获得分钟
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  //获得秒钟
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}

//设置视频的进度条
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//暂停视频
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
//事件监听
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
