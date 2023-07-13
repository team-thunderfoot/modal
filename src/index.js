import Modal from "./Modal"

class Page {
    constructor() {
        this.modal = [];
        this.init()
    }
    init() {
        document.querySelectorAll(".c--modal-a").forEach((element, index) => {
            this.modal[index] = new Modal({
                backdrop: "c--modal-backdrop-a",
                backdropActiveClass: "c--modal-backdrop-a--is-active",
                element: element,
                elementClass : "c--modal-a",
                modalIdTarget: element.getAttribute("id"),
                modalActiveClass: "c--modal-a--is-active",
                onHide: () => {
                    //do something
                },
                onShow: () => {
                    //do something
                },
            })
        });

        
        document.querySelector(".js--destroy-modal").addEventListener("click", (e) => {
            e.preventDefault();
            this.destroy()
        })
    }
    destroy(){
        document.querySelectorAll(".c--modal-a").forEach((element, index) => {
            this.modal[index].destroy();
        });
    }
}
export default Page
new Page()
