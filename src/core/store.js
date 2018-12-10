import {drinks, foods} from '../seeds'

export const store = {
    state: {
        drinks,
        foods,
        order: [],
    },
    setProductToOrder(product) {
        this.state.order.push(product)
    },
    setOrder() {
        this.clearOrder()
    },
    clearOrder() {
        this.state.order = []
    }
}