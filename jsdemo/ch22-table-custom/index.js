class MyTable extends HTMLElement {
    static get observedAttributes() {
        return ['columns', 'row'];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const table = document.createElement('table');
        table.border = '3px'
        table.id = 'table';
        table.cellPadding = '5px';
        table.cellSpacing = '5px';
        shadow.appendChild(table)
        this.connectedCallback(table)
    }

    connectedCallback(shadow) {
        console.log('Table added to page.');
        createTable(this)
    }

}

const row = document.querySelector('.row');

const createTable = (e) => {
    console.log(e)
    let shadow = e.shadowRoot
    // console.log(shadow)
    let id = e.getAttribute('id');
    console.log(id)
    let rows = e.getAttribute('row');
    let cols = e.getAttribute('columns');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            tr.appendChild(td)
        }
        shadow.firstChild.appendChild(tr);
    }
}

row.onclick = function () {
    let table
    let div = document.getElementById('data')
    if (!document.getElementById('myTable')) {
        table = document.createElement('my-table');
        table.setAttribute('row', '5');
        table.setAttribute('columns', '3');
        table.id = 'myTable';
        div.appendChild(table);
    } else {
        table = document.getElementById('myTable');
        table.setAttribute('row', '1');
        table.setAttribute('columns', '4');
        div.appendChild(table);
    }

};
customElements.define('my-table', MyTable);
