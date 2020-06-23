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
                <Card className="card-user">
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
                <Card className="card-user">
                  <Container>
                    <CardHeader>
                      <p>{this.state.item[0].item_id}</p>
                    </CardHeader>
                    <CardBody>
                      <div className="content-center">
                      </div>
                    </CardBody>
                  </Container>
                </Card>
                </div>
              </Link>
            )}
            </Col>
            <Col sm="4">
              <Link to="profile-page">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/profile-page.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="profile-page"
                tag={Link}
              >
                View Profile Page
              </Button>
            </Col>
            <Col sm="4">
              <Link to="landing-page">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing-page.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="landing-page"
                tag={Link}
              >
                View Landing Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TopDeals;
