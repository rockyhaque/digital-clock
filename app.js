function updateTime() {
  let currentDate = new Date();
  let hour = currentDate.getHours() % 12;
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();

  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("second").innerText = second;
}

setInterval(updateTime, 1000);
