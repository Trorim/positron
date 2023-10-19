import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            products: [
                {
                    id: 1,
                    img: "1.png",
                    title: "BXC",
                    descr: "Вытяжное устройство для механической системы вентиляции",
                    priceRub: 6000,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 2,
                    img: "2.png",
                    title: "G2H",
                    descr: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
                    priceRub: 7000,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 3,
                    img: "3.png",
                    title: "GHN",
                    descr: "Вытяжное устройство с датчиком присутствия",
                    priceRub: 6800,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 4,
                    img: "4.png",
                    title: "TDA",
                    descr: "Вытяжное устройство с датчиком присутствия",
                    priceRub: 6900,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 5,
                    img: "1.png",
                    title: "BXC",
                    descr: "Вытяжное устройство для механической системы вентиляции",
                    priceRub: 6000,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 6,
                    img: "2.png",
                    title: "G2H",
                    descr: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
                    priceRub: 7000,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 7,
                    img: "3.png",
                    title: "GHN",
                    descr: "Вытяжное устройство с датчиком присутствия",
                    priceRub: 6800,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 8,
                    img: "4.png",
                    title: "TDA",
                    descr: "Вытяжное устройство с датчиком присутствия",
                    priceRub: 6900,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
                {
                    id: 9,
                    img: "4.png",
                    title: "TDA",
                    descr: "Вытяжное устройство с датчиком присутствия",
                    priceRub: 6900,
                    priceRubMin: 6848,
                    priceRubMax: 56584,
                    priceEur: 77,
                    priceEurMin: 77.6,
                    priceEurMax: 643.86,
                    link: "#",
                    vendor: "G2H1065",
                    feature:
                        "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                    type: "Вытяжное устройство",
                    quantity: 1,
                },
            ],
            cart: [],
            equipmentInstallation: false,
        };
    },
    getters: {
        CART(state) {
            return state.cart;
        },
        countQuantity(state) {
            if (state.cart.length) {
                return state.cart.reduce(
                    (acc, cur) => (acc += 1 * cur.quantity),
                    0
                );
            } else {
                return 0;
            }
        },
    },
    mutations: {
        addProductToCart(state, product) {
            if (state.cart.includes(product)) {
                let index = state.cart.indexOf(product);
                state.cart[index].quantity += 1;
            } else {
                state.cart.push(product);
            }
        },
        emptyTrash(state) {
            state.cart.map((item) => (item.quantity = 1));
            state.cart = [];
        },
        deleteProductToCart(state, product) {
            let index = state.cart.indexOf(product);
            state.cart[index].quantity = 1;
            state.cart = state.cart.filter((item) => {
                return item.id !== product.id;
            });
        },
        increase(state, product) {
            let index = state.cart.indexOf(product);
            state.cart[index].quantity += 1;
        },
        decrease(state, product) {
            let index = state.cart.indexOf(product);
            if (state.cart[index].quantity === 1) {
                state.cart[index].quantity = 1;
                state.cart.splice(index, 1);
            } else {
                state.cart[index].quantity -= 1;
            }
        },
    },
    actions: {
        postData() {
            if (this.state.cart) {
                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.state.cart),
                })
                    .then((response) => {
                        console.log("response", response);
                        if (response.status === 204) {
                            return new Promise((resolve) => resolve(null));
                        }
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then(() => {
                        this.state.cart = [];
                    });
            }
        },
    },
});

export default store;
