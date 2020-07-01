import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Loader from "react-loader-spinner";
import axios from "axios";
import './../../assets/scss/dealCard.scss';
import './../../assets/scss/blobs.scss';

class Deals extends React.Component{
  
  state = {
    items: [],
    itemPrices: [],
    loading: true,
    limit: 15,
    counter: 15,
    toggleFilters: false
  }

  getDeals = () => {
    return new Promise((resolve, reject) => {
      axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getalldeals?limit=${this.state.limit}&offset=0`)
        .then(res => {
          const itemInfo = res.data
          console.log(itemInfo)
          this.setState({items: itemInfo, loading: false})
          resolve('Data Fetched')
        })
      })
  }

  getLength = () => {
    // add category and manufacturer to this url once setup
    axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getalldeals?getLength=true`)
      .then(res => {
        const dealsLength = res.data
        this.setState({dealLength: dealsLength})
      })
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.getDeals()
      this.getLength()
    })
  }

  loadMore = () => {
    this.setState({
      limit: this.state.limit + this.state.counter
    }, () => {
      this.getDeals().then(data => {
        this.scrollToRow()
      })
    })
  }

  toggle = () => {
    this.setState({
      toggleFilters: !this.state.toggleFilters
    })
    console.log(this.state.toggleFilters)
  }

  scrollToRow = () => {
    document
      .getElementById(this.state.limit-this.state.counter)
      .scrollIntoView({ behavior: "smooth" });
  };

  scrollToTop = () => {
    window.scrollTo(0, 0)
  };

  render() {
      let columns=[];
      this.state.items.forEach((item,idx) => {
        columns.push(
          <Col sm="4" key={`item ${item.item_id}`}>
            <Link to={`item/${item.item_id}`} onClick={this.scrollToTop}>
            <Card className="py-3 card-deals">
                <CardHeader>
                  <div className="card-image-deals rounded">
                    <img className="img-center img-fluid" alt="Image of product" src={item.item_image}></img>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="h-25 mt-4">
                    <h4 className="">{item.item_name}</h4>
                  </div>
                  <div className="h-25">
                    <h5 className="font-large text-warning"><strong>{item.item_price}</strong></h5>
                  </div>
                  <div className="h-25">
                  <p><strong>{item.item_discount_currency}</strong> savings!</p>
                  </div>
                </CardBody>
            </Card>
            </Link>
          </Col>
      )
        if ((idx+1)%3===0) {columns.push(<Row key={idx} id={idx+1}></Row>)}
      })
    return (
      <div className="">
        <img
          alt="..."
          className="bean-blob"
          src={require("assets/img/blob.png")}
        />
        <img
          alt="..."
          className="bean-blob2"
          src={require("assets/img/blob.png")}
        />
        <img
          alt="..."
          className="blob-path4-0"
          src={require("assets/img/path4.png")}
        />
        <img
          alt="..."
          className="blob-path4-1"
          src={require("assets/img/path4.png")}
        />
        <img
          alt="..."
          className="waves"
          src={require("assets/img/waves.png")}
        />
        <img
          alt="..."
          className="triangle"
          src={require("assets/img/triunghiuri.png")}
        />
        <img
          alt="..."
          className="blob-path5"
          src={require("assets/img/path5.png")}
        />
        <div className="section" data-background-color="black">
          <div className="space-50" />
          {!this.state.loading ? (
            <Container className="text-center">
              <Row>
                <div className="w-100 px-3">
                  <Row>
                    <div className="w-100 mb-3 pr-3">
                      <Button color="info" className="float-right text-uppercase" onClick={this.toggle}>Filters</Button>
                    </div>
                  </Row>
                  {this.state.toggleFilters ? (
                    <Row>
                      <div className="border-primary">
                        <p>Populate filters</p>
                      </div>
                    </Row>
                  ) : (
                  <div>
                  </div>
                  )}
                </div>
              </Row>
              <Row>
                {columns}
              </Row>
              {this.state.limit < this.state.dealLength ? (
              <Row className="mt-5">
                <div className="w-100">
                  <p className="pb-2">Showing {this.state.limit} of {this.state.dealLength} results</p>
                  <Button color="primary" className="text-center text-uppercase" onClick={this.loadMore}>Load more products</Button>
                </div>
              </Row>
              ) : (
              <Row className="mt-5">
                <div className="w-100">
                  <p>Showing {this.state.dealLength} of {this.state.dealLength} results</p>
                </div>
              </Row>
              )}
            </Container>
          ) : (
            <Container className="vh-100 v-center text-center">
              <Col lg="15">
                <Card className="card-user">
                  <Container>
                    <CardHeader>
                    </CardHeader>
                    <CardBody>
                      <div className="content-center">
                        <Loader className="mt-3" type="TailSpin" color="#00BFFF" height={80} width={80}/>
                        <h3 className="mt-5">Loading...</h3>
                      </div>
                    </CardBody>
                  </Container>
                </Card>
              </Col>
            </Container>
          )}
        </div>
      </div>
    )           
  }
}

export default Deals;