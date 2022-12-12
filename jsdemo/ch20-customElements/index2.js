class MyTemplate extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById('mytemplate1');
        let content = template.content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        let div = document.createElement('div')
        div.textContent = new Date()
        content.appendChild(div);
        shadowRoot.appendChild(content.cloneNode(true));
    }
}

customElements.define("my-template1", MyTemplate)