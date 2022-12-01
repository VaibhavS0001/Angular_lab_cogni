const storage = window.localStorage

const store = () =>{
    storage.setItem("name", document.forms["loginForm"]['name'].value)
    storage.setItem("password", document.forms["loginForm"]['pass'].value)
}

const login = () =>{
    console.log();
    if(document.forms["loginForm"]['name'].value == storage.getItem('name') && document.forms["loginForm"]['pass'].value == storage.getItem('password')){
        alert(`you are logged In ${storage.getItem('name')}`)
        window.location.href = "./location.html"
    }else{
        alert("incorrect username or password")
        // window.location.href = "./login.html"
    }
}