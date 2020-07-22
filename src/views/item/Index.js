import React from "react"
import { Container, Row } from "reactstrap"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import Item from "views/IndexSections/Item.js"
import Footer from "components/Footer/Footer.js"

import TopDeals from "views/IndexSections/TopDeals.js"
import AddAProduct from "views/IndexSections/AddAProduct.js"

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page")
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page")
  }
  render() {
    return (
      <>
        <Container fluid>
          <IndexNavbar />
          <Item id={this.props.match.params.id} />
          <TopDeals />
          <Row className='mt-5'>
            <AddAProduct />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </>
    )
  }
}

export default Index
