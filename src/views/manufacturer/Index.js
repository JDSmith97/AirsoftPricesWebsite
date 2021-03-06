import React from "react"
import { Container, Row } from "reactstrap"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import Manufacturer from "views/IndexSections/Manufacturer.js"
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
          <Manufacturer manufacturer={this.props.match.params.manufacturer} />
        </Container>
        <Container fluid>
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
