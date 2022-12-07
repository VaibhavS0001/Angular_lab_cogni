let body = document.querySelector("body")

body.addEventListener('mousemove', showCoords, true)

function showCoords(event) {
    var x = event.screenX;
    var y = event.screenY;
    if ((x < 300 && x > 8) || (y > 111 && y < 200)) {
        if (!body.classList.contains("bg1")) {
            body.classList.add("bg1")
            body.classList.remove("bg2")
            body.classList.remove("bg3")
        }
    }
    if ((x < 600 && x > 300) || (y > 200 && y < 400)) {
        if (!body.classList.contains("bg2")) {
            body.classList.add("bg2")
            body.classList.remove("bg1")
            body.classList.remove("bg3")
        }
    }
    if ((x < 1250 && x > 600) || (y > 400 && y < 570)) {
        if (!body.classList.contains("bg3")) {
            body.classList.add("bg3")
            body.classList.remove("bg1")
            body.classList.remove("bg2")
        }
    }
}