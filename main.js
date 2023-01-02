
let homeCount = 0;
let guestCount = 0;

document.getElementById("home-score").textContent = homeCount;
document.getElementById("guest-score").textContent = guestCount;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");


function plusOneHome() {
    homeCount += 1;
    console.log(homeCount);
    homeScore.textContent = homeCount;
}

function plusTwoHome() {
    homeCount += 2;
    console.log(homeCount);
    homeScore.textContent = homeCount;
}

function plusThreeHome() {
    homeCount += 3;
    console.log(homeCount);
    homeScore.textContent = homeCount;
}



function plusOneGuest() {
    guestCount += 1;
    console.log(guestCount);
    guestScore.textContent = guestCount;
}

function plusTwoGuest() {
    guestCount += 2;
    console.log(guestCount);
    guestScore.textContent = guestCount;
}

function plusThreeGuest() {
    guestCount += 3;
    console.log(guestCount);
    guestScore.textContent = guestCount;
}