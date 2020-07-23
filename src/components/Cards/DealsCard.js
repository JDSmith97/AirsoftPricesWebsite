import React, { Component } from "react"
import { Card, CardBody, CardHeader } from "reactstrap"
import { Link } from "react-router-dom"

class DealsCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item,
      currency: this.props.currency
    }
  }

  render() {
    return (
      <Link to={`/item/${this.state.item.item_id}`} onClick={this.scrollToTop}>
        <div className='content-center brand'>
          <Card className='py-3 card-deals my-5'>
            <CardHeader>
              <div className='card-image-deals rounded'>
                <img
                  className='img-center img-fluid'
                  alt={this.state.item.item_name}
                  src={this.state.item.item_image}
                ></img>
              </div>
            </CardHeader>
            <CardBody className='text-center'>
              <div className='h-25 my-4'>
                <h4 className=''>{this.state.item.item_name}</h4>
              </div>
              <div className='h-25'>
                {this.state.currency === "true" ? (
                  <h5 className='font-large text-warning'>
                    <strong>{this.state.item.item_price_eur}</strong>
                  </h5>
                ) : (
                  <h5 className='font-large text-warning'>
                    <strong>{this.state.item.item_price_gbp}</strong>
                  </h5>
                )}
              </div>
              <div className='h-25'>
                {this.state.currency === "true" ? (
                  <p>
                    <strong>{this.state.item.item_discount_eur}</strong>{" "}
                    savings!
                  </p>
                ) : (
                  <p>
                    <strong>{this.state.item.item_discount_gbp}</strong>{" "}
                    savings!
                  </p>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </Link>
    )
  }
}

export default DealsCard
