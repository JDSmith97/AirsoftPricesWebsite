import React from "react"
import { Link } from "react-router-dom"
import { Button, Row, Col, Container } from "reactstrap"
import Loader from "./../../components/Loader/ItemsPageLoader"
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

  render() {
    return (
      <>
        <Container>
          {this.state.loading ? (
            <div>
              <h2 className='title text-center w-100'>Top Deals Right Now!</h2>
              <Loader maxRows={1} isItemsPage={false}/>
            </div>
          ) : (
            <Row className='my-5'>
              <h2 className='title text-center w-100 my-5'>Top Deals Right Now!</h2>
              <Col md={{ size: "8", offset: 2 }} lg={{ size: "4", offset: 0 }}>
                  <DealsCard item={this.state.item[0]} currency={this.state.currency}/>
              </Col>
              <Col md={{ size: "8", offset: 2 }} lg={{ size: "4", offset: 0 }}>
                  <DealsCard item={this.state.item[1]} currency={this.state.currency}/>
              </Col>
              <Col md={{ size: "8", offset: 2 }} lg={{ size: "4", offset: 0 }}>
                  <DealsCard item={this.state.item[2]} currency={this.state.currency}/>
              </Col>
            </Row>
          )}
          <Row>
            <Col sm={{ size: "4", offset: "4" }}>
              <Link to='/deals' onClick={this.scrollToTop}>
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
        </Container>
      </>
    )
  }
}

export default TopDeals
