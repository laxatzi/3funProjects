/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleButton = player.querySelector('.toggle');

/* Build out functions */
function togglePlay() {
  const playing = video.paused ? 'play' : 'pause';
  video[playing]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggleButton.textContent = icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function brush(el) {
  const brushTime = (el.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = brushTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggleButton.addEventListener('click', togglePlay);

let mousedown = false;
progress.addEventListener('click', brush);
progress.addEventListener('mousemove', (e) => mousedown && brush(el));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);