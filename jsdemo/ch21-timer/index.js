class sample extends HTMLElement {
    // (1)
    connectedCallback() {
        let d = new Date(this.getAttribute("datetime") || Date.now());
        // this.innerHTML = `${d.getHours()} H - ${d.getMinutes()} M - ${d.getSeconds()} S`
        this.innerHTML = `00 H - 00 M - 00 S`
        let self = this
        var x = setInterval(function () {
            var now = new Date().getTime();
            var t = d - now;
            var hours = Math.floor(
                (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            self.innerHTML = `${hours} H - ${minutes} M - ${seconds} S`
            if (t < 0) {
                clearInterval(x);
                self.innerHTML = "EXPIRED";
            }
        }, 1000);
    }
}
customElements.define("time-formatted", sample);