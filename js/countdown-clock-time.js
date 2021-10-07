// (function countDownTime(id, seconds) {
//   let timeLeft = "";
//   if (seconds > 0) {
//     let seconds = parseInt(seconds % 60),
//       minutes = parseInt((seconds / 60) % 60),
//       hours = parseInt((seconds / 3600) % 24),
//       days = parseInt(seconds / 86400);
//     if (seconds > 0) {
//       timeLeft +=
//         days +
//         ":" +
//         (hours < 10 ? "0" + hours : hours) +
//         ":" +
//         (minutes < 10 ? "0" + minutes : minutes) +
//         ":" +
//         (seconds < 10 ? "0" + seconds : seconds);
//       document.querySelector(".offer-special__time-left").innerHTML = timeLeft;
//       setTimeout('countDownTime("' + id + '", ' + (seconds - 1) + ")", 1000);
//     }
//   }
// })();

// times(".offer-special__time-left", 36000);
