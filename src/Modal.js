import JSUTIL from "@andresclua/jsutil"
class Modal {
    constructor(payload) {
        this.DOM = {
            element : payload.element,
        }
        this.backdrop = payload.backdrop
        this.backdropActiveClass = payload.backdropActiveClass
        this.elementClass = payload.elementClass
        this.modalActiveClass = payload.modalActiveClass
        this.modalID = payload.modalIdTarget

        this.timeBackDrop = 0
        this.timeModal = 0

        this.onshow = payload.onShow
        this.onhide = payload.onHide

        this.JSUTIL = new JSUTIL()
        this.init()
        this.events()
    }

    init() {
        // empty for now
    }

    events() {
        document.querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`).forEach((element) => {
            element.addEventListener("click", (event) => this.show())
        })
        document.querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`).forEach((element) => {
            element.addEventListener("click", (event) => this.hide())
        })
    }

    async hide() {
        // Start Modal
        await this.tf_sto(this.timeModal)
        this.JSUTIL.removeClass(document.getElementById(`${this.modalID}`), this.modalActiveClass)
        // End Modal

        // Backdrop
        await this.tf_sto(this.timeBackDrop)
        this.JSUTIL.removeClass(
            document.querySelector(`.${this.backdrop}`),
            this.backdropActiveClass
        )
        await this.tf_sto(this.timeBackDrop)

        if (document.querySelector(`.${this.backdrop}`)) {
            var backdropHTML = document.querySelector(`.${this.backdrop}`)
            backdropHTML.parentNode.removeChild(backdropHTML)
        }
        // End Backdrop

        if (this.onhide) {
            this.onhide()
        }
    }

    async show() {
        // Backdrop
        var backdropHTML = document.createElement("div")
        backdropHTML.className = this.backdrop
        document.body.appendChild(backdropHTML)

        // get animation duration from set css in index.html for the backdrop
        const styleBackdrop = getComputedStyle(document.querySelector(`.${this.backdrop}`))
        Object.keys(styleBackdrop).forEach((key) => {
            if (key == "transitionDuration") {
                this.timeBackDrop = styleBackdrop[key]
            }
        })
        this.timeBackDropSplit = String(this.timeBackDrop).split("s")
        this.timeBackDrop = parseFloat(this.timeBackDropSplit[0]) * 1000

        // get animation duration from set css in index.html for the modal
        const styleModal = getComputedStyle(this.DOM.element)
        Object.keys(styleModal).forEach((key) => {
            if (key == "transitionDuration") {
                this.timeModal = styleModal[key]
            }
        })
        this.timeModalSplit = String(this.timeModal).split("s")
        this.timeModal = parseFloat(this.timeModalSplit[0]) * 1000

        await this.tf_sto(this.timeBackDrop)
        this.JSUTIL.toggleClass(
            document.querySelector(`.${this.backdrop}`),
            this.backdropActiveClass
        )

        await this.tf_sto(this.timeModal)
        this.JSUTIL.toggleClass(document.getElementById(this.modalID), this.modalActiveClass)

        if (document.querySelector(`.${this.backdrop}`)) {
            document
                .querySelector(`.${this.backdrop}`)
                .addEventListener("click", (event) => this.hide())
        }

        if (this.onshow) {
            this.onshow()
        }
    }

    async tf_sto(time) {
        return new Promise((resolve, reject) => {
            if (isNaN(time)) reject(new Error("is not a number"))
            else setTimeout(resolve, time)
        })
    }

    destroy(element) {
        document.querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`).forEach((element) => {
            element.removeEventListener("click", (event) => this.show())
        })
        document.querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`).forEach((element) => {
            element.removeEventListener("click", (event) => this.hide())
        })

        this.JSUTIL.removeClass(this.DOM.element, this.elementClass)

        this.JSUTIL = null
    }
}
export default Modal
