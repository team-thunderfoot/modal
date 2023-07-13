# Modal

An npm package that provides a Modal class to manage modals in your application.

[Here's an example](https://team-thunderfoot.github.io/modal/)

## Installation

```sh
npm install @teamthunderfoot/modal
```

## Usage

```sh
import Modal from "@teamthunderfoot/modal";

class Page {
  constructor() {
    this.init();
    this.events();
  }

  init() {

    const modal = new Modal({
        backdrop: 'c--modal-backdrop-a', // class of the backdrop
        backdropActiveClass: 'c--modal-backdrop-a--is-active', // active class of the backdrop
        element: document.querySelector(".c--modal-a")
        elementClass: 'c--modal-a', // class of the modal
        modalIdTarget: 'modal-1', // ID of the modal
        modalActiveClass: 'c--modal-a--is-active', // active class of the modal
        onHide: () => {
            // do something when the modal closes
        },
        onShow: () => {
            // do something when the modal pops up
        }
    });
  }

  events() {
  }
}

export default Page;

new Page();

```

You can also use the functions show() and hide() to use them at your convenience.

```sh
modal.show();
```

```sh
modal.hide()
```

## Usage for Nuxt

1 - Create a file Modal.js inside the plugins folder & add this.

```sh
import Modal from "@teamthunderfoot/modal";

export default ({ app }, inject) => {
    inject('Modal', () => new Modal({
        backdrop: 'c--modal-backdrop-a', // class of the backdrop
        backdropActiveClass: 'c--modal-backdrop-a--is-active', // active class of the backdrop
        element: document.querySelector(".c--modal-a")
        elementClass: 'c--modal-a', // class of the modal
        modalIdTarget: 'modal-1', // ID of the modal
        modalActiveClass: 'c--modal-a--is-active', // active class of the modal
        onHide: () => {
            // do something when the modal closes
        },
        onShow: () => {
            // do something when the modal pops up
        }
    }));
};
```

2 - Reference it in your nuxt.config.js

```sh
plugins: [
    { src: '~/plugins/Modal.js', ssr: false }
]
```

3- In your Page.vue

```sh
async mounted() {
    setTimeout(() => {
        this.$Modal();
    }, 200)
}
```

In your HTML file, add the necessary elements for the modal. The modal should have a specific structure that includes a backdrop and the modal content.

-   **Modal:** The modal element should have:

    -   A unique ID. Example: `id="modal-1"`.
    -   A class for the modal. Example: `class="c--modal-a"`.
    -   Modal content inside the modal element.

-   **Button to open:** The button element should have an attribute that references the ID of the modal it is interacting with. Example: `tf-ds-modal-target="modal-1"`.

-   **Button to close:** The button element should have an attribute that references the ID of the modal it is interacting with. Example: `tf-ds-modal-close="modal-1"`.

#### HTML

```sh
<button type="button" class="c--btn-a" tf-ds-modal-target="modal-1">
    Launch demo modal
</button>
<div id="modal-1" class="c--modal-a" role="dialog">
    <h3 class="f--font-third">Welcome to a super modal</h3>
    <img src="https://www.turn-keytechnologies.com/wp-content/uploads/2020/02/aruba-mobility-master.png" alt="">
    <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <button class="c--modal-a__btn" tf-ds-modal-close="modal-1" aria-label="Close">
        <svg class="c--modal-a__btn__icon apb apb-close" viewBox="0 0 15.81 15.81" enable-background="new 0 0 15.81 15.81" xml:space="preserve">
            <path d="M8.74,8.03l6.82,6.82l-0.71,0.71L8.03,8.74l-7.07,7.07L0.25,15.1l7.07-7.07L0,0.71L0.71,0l7.32,7.32l7.07-7.07l0.71,0.71L8.74,8.03z"/>
        </svg>
    </button>
</div>
```

#### CSS Styles

```sh
.c--modal-a {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    width: 60%;
    background-color: #78f2c5;
    padding: 2rem;
    transition: transform 0.3s 0s ease;
}

.c--modal-a__btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: #1a191d;
}

.c--modal-a__btn__icon {
    color: #1a191d;
    height: 1rem;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .c--modal-a__btn__icon {
        width: 1rem;
    }
}

.c--modal-a__btn__icon path {
    fill: #1a191d;
}
.c--modal-a--is-active {
    visibility: visible;
    opacity: 1;
}

.c--modal-backdrop-a {
    visibility: visible;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: rgba(26, 25, 29, 0.7);
    transform: translate(0px, 100%);
    transition: transform 0.3s 0s ease;
}

.c--modal-backdrop-a--is-active {
    transform: translate(0px, 0%);
}

```

## Customization

You can customize the CSS classes used by the modal package to match your project's styles and structure. Modify the class names in both the JavaScript and HTML sections accordingly.

## Options

• `backdrop:` Specifies the CSS class for the modal backdrop.

• `backdropActiveClass:` Specifies the CSS class to indicate that the modal backdrop is active.

• `element:` Specifies the element for the modal itself.

• `elementClass:` Specifies the CSS class for the modal itself.

• `modalIdTarget:` Specifies the ID of the modal HTML element.

• `modalActiveClass:` Specifies the CSS class to indicate that the modal is active.

• `onHide:` Optional function to be executed when the modal is hidden.

• `onShow:` Optional function to be executed when the modal is shown.

## Destroy

Destroys the Modal instance by removing event listeners and resetting the state. This method should be called when you want to completely

```sh
const modal = new Modal(options);
modal.destroy();
```

## More than one modal

If you have two or more modals, you can instantiate the JS class in the following way:

```sh
import Modal from "@teamthunderfoot/modal";

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

  events() {
  }

  destroy(){
        document.querySelectorAll(".c--modal-a").forEach((element, index) => {
            this.modal[index].destroy();
        });
    }
}

export default Page;

new Page();

```
