import React, { Component } from 'react'

class CartFooter extends Component {

  render() {

    return(
      <nav className="navbar navbar-dark bg-dark" style={{bottom: '0', position: 'fixed', marginBottom: '0%', width: '100%'}}>
        <a className="navbar-brand" href="/#"> {this.props.copyright}</a>
      </nav>
    )
  }
}

export default CartFooter