const storage = window.localStorage

navigator.geolocation.getCurrentPosition(updateLocation, handleLocationError)

function disp(){
    console.log(storage.getItem('name'))
}

function updateLocation(position){
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let accuracy = position.coords.accuracy
    storage.setItem("lat", latitude)
    storage.setItem("lon", longitude)
    storage.setItem("acc", acc)

    document.getElementById("lat").innerHTML = latitude
    document.getElementById("lon").innerHTML = longitude
    document.getElementById("acc").innerHTML = accuracy
}

function handleLocationError(err) {
    switch(err){
        case 0:
            updateStatus("cannot retrieve location")
            break;
        case 1:
            updateStatus("user denied permission")
            break;
        case 2:
            updateStatus("there is a problem with the browser")
            break;
        case 3:
            updateStatus("Timeout")
            break;
    }
}