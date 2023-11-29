function updateTime() {
    var currentTime = new Date().toLocaleString('en-US', { 
        weekday: 'short', // "Mon" for Monday
        year: 'numeric', // 2022
        month: 'short', // "Nov" for November
        day: 'numeric', // 14
        hour: '2-digit', // 2-digit hour
        minute: '2-digit', // 2-digit minute
        second: '2-digit', // 2-digit second
        timeZoneName: 'short' // "EST" for Eastern Standard Time
    });
    document.getElementById('timeDisplay').innerHTML = currentTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize with current time
updateTime();
