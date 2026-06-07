let homeCount = 0
let guestCount = 0
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function addOneHome() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function addTwoHome() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function addThreeHome() {
    homeCount += 3
    homeEl.textContent = homeCount
}

function addOneGuest() {
    guestCount += 1
    guestEl.textContent = guestCount
}

function addTwoGuest() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function addThreeGuest() {
    guestCount += 3
    guestEl.textContent = guestCount
}