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
  
  constructor(props) {
    super(props)
    this.state = {
      item: [],
      itemPrices: [],
      loading: true,
      currency: localStorage.getItem('currency')
    }
  }
  
  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getbestdeals`)
        .then(res => {
          const itemInfo = res.data.body
          this.setState({item: itemInfo, loading: false})
      })
    })
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  };

  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <div className="space-50" />
        <Container className="text-center">
          <h2 className="title">
            Top Deals Right Now!
          </h2>
          <Row>
            <Col sm="12" md="6" lg="4">
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
              <Link to={`item/${this.state.item[0].item_id}`} onClick={this.scrollToTop}>
                <div className="content-center brand">
                  <Card className="py-3 card-deals">
                    <CardHeader>
                      <div className="card-image-deals rounded">
                        <img className="img-center img-fluid" alt={this.state.item[0].item_name} src={this.state.item[0].item_image}></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div className="h-25 mt-4">
                        <h4 className="">{this.state.item[0].item_name}</h4>
                      </div>
                      <div className="h-25">
                        {this.state.currency === "true" ? (
                          <h5 className="font-large text-warning"><strong>{this.state.item[0].item_price_eur}</strong></h5>
                        ) : (
                          <h5 className="font-large text-warning"><strong>{this.state.item[0].item_price_gbp}</strong></h5>
                        )}
                      </div>
                      <div className="h-25">
                        {this.state.currency === "true" ? (
                          <p><strong>{this.state.item[0].item_discount_eur}</strong> savings!</p>
                        ) : (
                          <p><strong>{this.state.item[0].item_discount_gbp}</strong> savings!</p>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Link>
            )}
            </Col>
            <Col sm="12" md="6" lg="4">
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
                <Link to={`item/${this.state.item[1].item_id}`} onClick={this.scrollToTop}>
                  <div className="content-center brand">
                    <Card className="py-3 card-deals">
                      <CardHeader>
                        <div className="card-image-deals rounded">
                          <img className="img-center img-fluid" alt={this.state.item[1].item_name} src={this.state.item[1].item_image}></img>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="h-25 mt-4">
                          <h4 className="">{this.state.item[1].item_name}</h4>
                        </div>
                        <div className="h-25">
                          {this.state.currency === "true" ? (
                            <h5 className="font-large text-warning"><strong>{this.state.item[1].item_price_eur}</strong></h5>
                          ) : (
                            <h5 className="font-large text-warning"><strong>{this.state.item[1].item_price_gbp}</strong></h5>
                          )}
                        </div>
                        <div className="h-25">
                          {this.state.currency === "true" ? (
                            <p><strong>{this.state.item[1].item_discount_eur}</strong> savings!</p>
                          ) : (
                            <p><strong>{this.state.item[1].item_discount_gbp}</strong> savings!</p>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Link>
              )}
            </Col>
            <Col sm="12" md="6" lg="4" xl="4" className="d-block d-sm-block d-md-none d-lg-block d-xl-block">
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
                <Link to={`item/${this.state.item[2].item_id}`} onClick={this.scrollToTop}>
                  <div className="content-center brand">
                    <Card className="py-3 card-deals">
                      <CardHeader>
                        <div className="card-image-deals rounded">
                          <img className="img-center img-fluid" alt={this.state.item[2].item_name} src={this.state.item[2].item_image}></img>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div className="h-25 mt-4">
                          <h4 className="">{this.state.item[2].item_name}</h4>
                        </div>
                        <div className="h-25">
                        {this.state.currency === "true" ? (
                          <h5 className="font-large text-warning"><strong>{this.state.item[2].item_price_eur}</strong></h5>
                        ) : (
                          <h5 className="font-large text-warning"><strong>{this.state.item[2].item_price_gbp}</strong></h5>
                        )}
                        </div>
                        <div className="h-25">
                          {this.state.currency === "true" ? (
                            <p><strong>{this.state.item[2].item_discount_eur}</strong> savings!</p>
                          ) : (
                            <p><strong>{this.state.item[2].item_discount_gbp}</strong> savings!</p>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Link>
              )}
            </Col>           
          </Row>
          <Row>
            <Col sm="4"></Col>
            <Col sm="4">
              <Link to="deals" onClick={this.scrollToTop}>
                <Button
                    className="d-lg-block w-100"
                    color="info"
                    data-placement="right"
                    type="button"
                    target="_blank"
                  >
                    View All Deals!
                </Button>
              </Link>
            </Col>
            <Col sm="4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TopDeals;
