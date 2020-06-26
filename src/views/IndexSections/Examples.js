/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Loader from "react-loader-spinner";
import axios from "axios";
import './../../assets/scss/dealCard.scss';

class TopDeals extends React.Component {

  state = {
    item: [],
    itemPrices: [],
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getbestdeals`)
        .then(res => {
          const itemInfo = res.data.body
          console.log(itemInfo)
          this.setState({item: itemInfo, loading: false})
      })
    })
  }

  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        {/* <img alt="..." className="path" src={require("assets/img/path1.png")} /> */}
        <div className="space-50" />
        <Container className="text-center">
          <h2 className="title">
            Top Deals Right Now!
          </h2>
          <Row>
            <Col sm="4">
            {this.state.loading ? (
                <div className="content-center brand">
                <Card>
                  <Container>
                    <CardHeader>
                    </CardHeader>
                    <CardBody>
                      <div className="content-center">
                        <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
                        <p>Loading...</p>
                      </div>
                    </CardBody>
                  </Container>
                </Card>
                </div>
            ) : (
              <Link to="landing-page">
                <div className="content-center brand">
                <Card className="deal-card">
                  <Container>
                    <CardHeader>
                      <img className="img-center img-fluid rounded shadow-lg" alt="Image of product" src={this.state.item[0].item_image}></img>
                      <h4>{this.state.item[0].item_name}</h4>
                    </CardHeader>
                    <CardBody>
                      <div className="content-center">
                        <h4>{this.state.item[0].item_price}</h4>
                        <p>£{this.state.item[0].item_discount} savings!</p>
                      </div>
                    </CardBody>
                  </Container>
                </Card>
                </div>
              </Link>
            )}
            </Col>
            <Col sm="4">
              {this.state.loading ? (
                  <div className="content-center brand">
                  <Card>
                    <Container>
                      <CardHeader>
                      </CardHeader>
                      <CardBody>
                        <div className="content-center">
                          <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
                          <p>Loading...</p>
                        </div>
                      </CardBody>
                    </Container>
                  </Card>
                  </div>
              ) : (
                <Link to="landing-page">
                  <div className="content-center brand">
                  <Card className="deal-card">
                    <Container>
                      <CardHeader>
                        <img className="img-center img-fluid rounded shadow-lg" alt="Image of product" src={this.state.item[1].item_image}></img>
                        <h4>{this.state.item[1].item_name}</h4>
                      </CardHeader>
                      <CardBody>
                        <div className="content-center">
                          <h4>{this.state.item[1].item_price}</h4>
                          <p>£{this.state.item[1].item_discount} savings!</p>
                        </div>
                      </CardBody>
                    </Container>
                  </Card>
                  </div>
                </Link>
              )}
            </Col>
            <Col sm="4">
              {this.state.loading ? (
                  <div className="content-center brand">
                  <Card>
                    <Container>
                      <CardHeader>
                      </CardHeader>
                      <CardBody>
                        <div className="content-center">
                          <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
                          <p>Loading...</p>
                        </div>
                      </CardBody>
                    </Container>
                  </Card>
                  </div>
              ) : (
                <Link to="landing-page">
                  <div className="content-center brand">
                  <Card className="deal-card">
                    <Container>
                      <CardHeader>
                        <img className="img-center img-fluid rounded shadow-lg" alt="Image of product" src={this.state.item[2].item_image}></img>
                        <h4>{this.state.item[2].item_name}</h4>
                      </CardHeader>
                      <CardBody>
                        <div className="content-center">
                          <h4>{this.state.item[2].item_price}</h4>
                          <p>£{this.state.item[2].item_discount} savings!</p>
                        </div>
                      </CardBody>
                    </Container>
                  </Card>
                  </div>
                </Link>
              )}
            </Col>           
          </Row>
          <Row>
            <Col sm="12" md={{ size: 4, offset: 4 }}>
              <Button
                  className="d-lg-block"
                  color="info"
                  data-placement="right"
                  type="button"
                  target="_blank"
                  href="#"
                >
                  View All Deals!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TopDeals;
