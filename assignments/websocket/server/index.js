const webSocket = require("ws")
const wss = new webSocket.Server({port: 8082})

wss.on('connection', ws=>{
    console.log("connected")
    ws.on("message", data=>{
        console.log(`recieved data${data}`)
    })
    ws.on("close", ()=>{
        console.log("connection closed")
    })
})