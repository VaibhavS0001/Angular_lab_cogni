let div = document.createElement("div")
div.id = "div1"
let p = document.createElement("p")
p.id = "p1"
p.innerHTML = "Hi there This is paragraph with classname p1"
div.appendChild(p)
document.body.appendChild(div);

function toggle() {
    let p1 = document.getElementById("p1")
    if(!p1.classList.contains("para")){
        p1.classList.add("para")
    }else{
        p1.classList.remove("para")
    }
}