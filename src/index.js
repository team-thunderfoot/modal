import Modal from "./Modal"

class Page {
    constructor() {
        this.init()
    }
    init() {
        const modal = new Modal({
            backdrop: "c--modal-backdrop-a",
            backdropActiveClass: "c--modal-backdrop-a--is-active",
            modal: "c--modal-a",
            modalIdTarget: "modal-1",
            modalActiveClass: "c--modal-a--is-active",
            onHide: () => {
                //do something
            },
            onShow: () => {
                //do something
            },
        })

        // modal.show()

        // setTimeout(() => {
        //     modal.hide()
        // }, 7500)

        document.querySelector(".js--destroy-modal").addEventListener("click", (e) => {
            e.preventDefault()
            var destroy = modal.destroy()
        })
    }
}
export default Page
new Page()
