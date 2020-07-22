import React from "react";
// reactstrap components
import { Container, Row, Col, FormGroup, Form, Button, Input } from "reactstrap";
import './../../assets/scss/addAProduct.scss';

class AddAProduct extends React.Component {

  onFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.emailInputValue)
  }

  render() {
    return (
      <div
        className="section section-download w-100"
        data-background-color="black"
        id="add-a-product"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
                Want to add a product to our website?
              </h2>
              <h4 className="description">
                Fill out the form below and we will add your requested product to be price tracked by our system!
              </h4>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Your Name</label>
                      <Input placeholder="John Smith" type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Email address</label>
                      <Input
                        placeholder="john@email.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Product</label>
                      <Input placeholder="Some airsoft product" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  className="float-right"
                  color="info"
                  data-placement="right"
                  id="tooltip341148792"
                  type="button"
                >
                  Request Product
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddAProduct;
