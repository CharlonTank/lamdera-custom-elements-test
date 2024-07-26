exports.init = async function (app) {
    return app;
}

class EditableStuff extends HTMLElement {
    connectedCallback() {
        console.log("This is my webcomponent!")
        let pre = document.createElement('pre')
        let code = document.createElement('code')
        code.innerHTML = this.elmElement
        console.log(this.elmElement)
        pre.appendChild(code)
        this.appendChild(pre)
    }

    set elmElement(newValue) {
        console.log("Getting new value in JS")
        if (newValue) {
            console.log(newValue)
        }
    }
}

window.customElements.define('editable-stuff', EditableStuff);