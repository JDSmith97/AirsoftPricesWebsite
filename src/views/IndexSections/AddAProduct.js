import React from "react"
// reactstrap components
import { Container, Row, Col, FormGroup, Form, Button, Input } from "reactstrap"
import axios from "axios"
import "./../../assets/scss/addAProduct.scss"

class AddAProduct extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      product: "",
      sent: false,
      nameInvalid: false,
      emailInvalid: false,
      productInvalid: false,
    }
  }

  onFormSubmit = () => {
    const { name, email, product } = this.state

    if (!name) {
      this.setState({ nameInvalid: true })
    } else if (!email) {
      this.setState({ emailInvalid: true })
    } else if (!product) {
      this.setState({ productInvalid: true })
    }

    if (name && email && product) {
      axios
        .get(
          "https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/submitform",
          {
            params: {
              name: name,
              email: email,
              product: product,
            },
          }
        )
        .then(() => {
          this.setState({ sent: true })
        })
    }
  }

  onChange = (e) => {
    let invalid = `${e.target.name}Invalid`

    this.setState({ [e.target.name]: e.target.value })
    if (e.target.value) {
      this.setState({ [invalid]: false })
    } else {
      this.setState({ [invalid]: true })
    }
  }

  render() {
    return (
      <div className='section section-download w-100' id='add-a-product'>
        <img alt='...' className='path' src={require("assets/img/path1.png")} />
        <Container>
          <Row className='justify-content-md-center'>
            <Col className='text-center' lg='8' md='12'>
              <h2 className='title'>Want to add a product to our website?</h2>
              <h4 className='description'>
                Fill out the form below and we will add your requested product
                to be price tracked by our system!
              </h4>
            </Col>
            <Col className='text-center' lg='8' md='12'>
              {!this.state.sent ? (
                <Form>
                  <Row>
                    <Col md='6'>
                      <FormGroup>
                        <label>Your Name</label>
                        <Input
                          placeholder='John Smith'
                          type='text'
                          name='name'
                          onChange={this.onChange}
                          invalid={this.state.nameInvalid}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <FormGroup>
                        <label>Email address</label>
                        <Input
                          placeholder='john.smith@email.com'
                          type='email'
                          name='email'
                          onChange={this.onChange}
                          invalid={this.state.emailInvalid}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md='12'>
                      <FormGroup>
                        <label>Product</label>
                        <Input
                          placeholder='An airsoft product'
                          type='text'
                          name='product'
                          onChange={this.onChange}
                          invalid={this.state.productInvalid}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    className='float-right'
                    color='info'
                    data-placement='right'
                    id='tooltip341148792'
                    type='button'
                    onClick={() => this.onFormSubmit()}
                  >
                    Request Product
                  </Button>
                </Form>
              ) : (
                <div>
                  <h4>
                    <strong>Product Request Sent!</strong>
                  </h4>
                  <h5>
                    We will let you know when it's been added to the system.
                  </h5>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AddAProduct
