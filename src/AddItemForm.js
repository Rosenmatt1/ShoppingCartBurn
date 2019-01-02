import React, { Component } from 'react'

class AddItemForm extends Component {

  render() {

    return (
      <div className="container">
        <form
          onSubmit={this.props.addItem}
        >
          <div className=" my-2">Total: ${this.props.total} </div>
          <div className="form-group my-3">
            Quantity
            <input
              type="number"
              className="form-control"
              onChange={this.props.updateQuantity}
            />
            <select
              className="form-control my-3"
              onChange={this.props.updateItem}
            >
              <option>--Pick an Option--</option>
              {this.props.products.map((item, idx) => {
                return <option
                  key={idx}>
                  {item.name}
                </option>
              })}
            </select>
            <button className="btn btn-primary mb-3">
              Submit</button>
          </div>
        </form>
      </div>
    )}
}

export default AddItemForm