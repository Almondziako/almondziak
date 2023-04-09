
function date() {
    var day = new Date().toLocaleDateString('pl', { weekday:"long" });
    var time = new Date().toLocaleTimeString('pl', {hour:'2-digit', minute:'2-digit'})

    document.getElementById("clockdiv").innerHTML = `<p class="clockclass" id="clockid">${day},</p><p>${time}</p>`;
};

setInterval(date, 1000);