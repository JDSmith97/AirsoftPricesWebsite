import React from "react"
import { Container, Row } from "reactstrap"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import Deals from "views/IndexSections/Deals.js"
import Footer from "components/Footer/Footer.js"
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
          <Deals />
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
