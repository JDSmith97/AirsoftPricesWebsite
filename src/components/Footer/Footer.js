import React from "react"
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap"

class Footer extends React.Component {
  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <footer className='footer w-100 p-0'>
        <Container>
          <Row>
            <Col md='3'>
              <h2 className='title'>Airsoft Prices</h2>
            </Col>
            <Col md='6' className='d-flex align-items-center'>
              <h4 className='m-md-0 w-100 text-center'>
                Have a question? <a href='mailto:name@email.com'> Contact us</a>
              </h4>
            </Col>
            <Col md='3' className='d-flex align-items-center'>
              <div className='btn-wrapper profile w-100 text-center'>
                <Button
                  className='btn-icon btn-neutral btn-round btn-simple'
                  color='default'
                  href='https://www.facebook.com/AirsoftPrices-111177704005247'
                  id='tooltip230450801'
                  target='_blank'
                >
                  <i className='fab fa-facebook-square' />
                </Button>
                <UncontrolledTooltip delay={0} target='tooltip230450801'>
                  Like us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
