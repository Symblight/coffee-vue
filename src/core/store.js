import {drinks, foods} from '../seeds'

export const store = {
    state: {
        drinks,
        foods,
        order: [],
        auth: false,
    },
    setAuth() {
        console.log(this.state.auth)
        this.state.auth = !this.state.auth;
    },
    setProductToOrder(product) {
        console.log('set product!')
        this.state.order.push(product)
    },
    setOrder() {
        console.log('set order!')
        this.clearOrder()
    },
    clearOrder() {
        console.log('clear!')
        this.state.order = []
    },
    removeProduct(id) {
        console.log('remove!', id)
        this.state.order = this.state.order.filter(product => product.id !== id)
    }
}