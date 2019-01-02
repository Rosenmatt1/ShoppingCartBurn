import React, { Component } from 'react'

class CartItem extends Component {

  render() {

    return (
      <div className="container">
        <div className="collection-item">
          <div className="row">
            <div className="col-md-8">{this.props.product}</div>
            <div className="col-md-2">{this.props.price}</div>
            <div className="col-md-2">{this.props.quantity}</div>
          </div>
        </div>
      </div>
    )}
}

export default CartItem