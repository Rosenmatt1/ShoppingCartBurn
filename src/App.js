import React, { Component } from 'react'
import CartHeader from './CartHeader.js'
import CartFooter from './CartFooter.js'
import CartItems from './CartItems.js'
import AddItemForm from './AddItemForm'

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cart: [],
      name: "",
      price: 0,
      quantity: 1,
      subTotal: 0,
      total: 0
    }
  }

  updateQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    }) 
  }

  updateItem = (event) => {
    var filteredPrice = this.state.products.filter(product => {
      return event.target.value === product.name 
    })
    this.setState({
      name: event.target.value,
      price: (filteredPrice[0].priceInCents/100)
    })
  }

  addItem = (event) => {
    event.preventDefault()
    var newItem = {
      item: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
      subTotal: this.state.price * this.state.quantity
    }
    this.setState({
      cart: [...this.state.cart, newItem],
      total: this.state.total + newItem.subTotal
    })
  }

  render() {

    return (
      <div>
        <CartHeader />
        <CartItems 
          cart = {this.state.cart}
        />
        <AddItemForm 
          total = {this.state.total}
          products = {this.state.products}
          updateQuantity = {this.updateQuantity}
          updateItem = {this.updateItem}
          addItem = {this.addItem}
        />
        <CartFooter 
          copyright = "&copy; copyright" 
        />
      </div>
    )
  }
}

export default App
