import React from "react"
import { Row, Container } from "reactstrap"

// core components
import PageHeader from "components/PageHeader/PageHeader.js"
import Footer from "components/Footer/Footer.js"

import TopDeals from "views/IndexSections/TopDeals.js"
import AddAProduct from "views/IndexSections/AddAProduct.js"
import IndexNavbar from "components/Navbars/IndexNavbar.js"

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
        <IndexNavbar />
        <div className='wrapper'>
          <PageHeader />
          <Container fluid>
            <TopDeals />
            <Row className='mt-5'>
              <AddAProduct />
            </Row>
            <Row>
              <Footer />
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default Index
