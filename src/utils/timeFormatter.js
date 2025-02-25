exports.formatTime = (ms) => {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    let timeString = "";
    if (days > 0) timeString += days + "d ";
    if (hours > 0) timeString += hours + "h ";
    if (minutes > 0) timeString += minutes + "m ";
    if (seconds > 0) timeString += seconds + "s";

    return timeString.trim();
};
