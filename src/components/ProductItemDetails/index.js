import {Component} from 'react'
// Write your code here
import './index.css'

class ProductItemDetails extends Component {
  state = {details: this.props}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      `https://apis.ccbp.in/products/:${id}`,
      options,
    )
    console.log(response)
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {details} = this.state

    return (
      <div>
        <h1>Hi</h1>
      </div>
    )
  }
}

export default ProductItemDetails
