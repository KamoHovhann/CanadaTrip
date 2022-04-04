dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString){
  const targetDate = dayjs(dateString);

  element.querySelector(".until__event").textContent = `Until ${ targetDate.format("D MMMM YYYY")}`;

  setInterval(() =>{
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));


  element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
  element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
  element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
  element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed().toString().padStart(2, "0");

  }, 250);
}

activateCountdown(document.getElementById("myCountdown"), "2022-07-09");
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
