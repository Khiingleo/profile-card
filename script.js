function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    timeElement.textContent = utcTime;
}

document.addEventListener("DOMContentLoaded", updateTime);
setInterval(updateTime, 1000);