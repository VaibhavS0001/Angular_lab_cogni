const calculate = () => {
    document.getElementById('status').classList.remove('hidden')
    setTimeout(() => {
        document.getElementById('status').classList.add('hidden')
        document.getElementById('res').classList.remove('hidden')
        document.getElementById('res').classList.add('visible')
        let year = document.getElementById('year').value
        let interest = document.getElementById('interest').value
        let principle = document.getElementById('principle').value
        let months = year * 12
        // console.log(months)
        let SI = (principle * interest * year) / 100
        // console.log(SI)
        let tp = parseInt(principle) + parseInt(SI)
        document.getElementById("tp").value = tp
        let ti = parseInt(tp) - parseInt(principle)
        document.getElementById("ti").value = ti
        const mi = (principle * (interest * 0.01)) / months;
        const total = ((principle / months) + mi).toFixed(2);
        document.getElementById("mp").value = total
        // console.log(total)
    }, 1000)
}