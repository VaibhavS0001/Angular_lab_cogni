let div = document.createElement('div');
div.id = 'maindiv';
div.className = 'div1';
let str = document.createTextNode('create element using javascript');
div.appendChild(str);
document.body.appendChild(div);

let ul = document.createElement('ul');
ul.id = "list1"
document.body.appendChild(ul);
let list1 = document.querySelector("#list1");
let arr = ["home", "products", "About us", "Contact"];

let nodes = arr.map(e => {
    let listItem = document.createElement("li")
    listItem.textContent = e;
    return listItem
})
list1.append(...nodes)
const h2 = document.createElement('h2');
h2.innerText = 'This is H2';
const h1 = document.createElement('h1');
h1.innerText = 'This is H1';
ul.after(h1);
div.after(h2);