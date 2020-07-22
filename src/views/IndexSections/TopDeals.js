import React from "react"
import { Link } from "react-router-dom"
// reactstrap components
import { Button, Row, Col, Card, CardBody } from "reactstrap"
import Loader from "react-loader-spinner"
import DealsCard from "../../components/Cards/DealsCard"
import axios from "axios"
import "./../../assets/scss/dealCard.scss"

class TopDeals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [],
      itemPrices: [],
      loading: true,
      currency: localStorage.getItem("currency"),
    }
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get(
          `https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getbestdeals`
        )
        .then((res) => {
          const itemInfo = res.data.body
          this.setState({ item: itemInfo, loading: false })
        })
    })
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  loader() {
    return (
      <Row className='position-relative items-page d-flex justify-content-center mb-5'>
        <div className='d-flex align-items-center'>
          <Col className='ml-auto mr-auto'>
            <Card className=''>
              <CardBody>
                <div className='d-flex justify-content-center'>
                  <Loader
                    type='TailSpin'
                    color='#00BFFF'
                    height={80}
                    width={80}
                  />
                </div>
                <h3>Loading...</h3>
              </CardBody>
            </Card>
          </Col>
        </div>
      </Row>
    )
  }

  render() {
    return (
      <>
        <Row className='my-5'>
          <h2 className='title text-center w-100 my-5'>Top Deals Right Now!</h2>
          <Col md={{ size: "8", offset: 2 }} lg={{ size: "4", offset: 0 }}>
            {this.state.loading ? (
              this.loader()
            ) : (
              <DealsCard item={this.state.item[0]} currency={this.state.currency}/>
            )}
          </Col>
          <Col md={{ size: "8", offset: 2 }} lg={{ size: "4", offset: 0 }}>
            {this.state.loading ? (
              this.loader()
            ) : (
              <DealsCard item={this.state.item[1]} currency={this.state.currency}/>
            )}
          </Col>
          <Col md={{ size: "8", offset: 2 }} lg={{ size: "4", offset: 0 }}>
            {this.state.loading ? (
              this.loader()
            ) : (
              <DealsCard item={this.state.item[2]} currency={this.state.currency}/>
            )}
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "4", offset: "4" }}>
            <Link to='deals' onClick={this.scrollToTop}>
              <Button
                className='d-lg-block w-100'
                color='info'
                data-placement='right'
                type='button'
                target='_blank'
              >
                View All Deals!
              </Button>
            </Link>
          </Col>
        </Row>
      </>
    )
  }
}

export default TopDeals
