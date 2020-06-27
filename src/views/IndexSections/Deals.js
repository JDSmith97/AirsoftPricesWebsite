import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Loader from "react-loader-spinner";
import axios from "axios";
import './../../assets/scss/dealCard.scss';

class Deals extends React.Component{
  
  state = {
    items: [],
    itemPrices: [],
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getalldeals`)
        .then(res => {
          const itemInfo = res.data.body
          console.log(itemInfo)
          this.setState({items: itemInfo, loading: false})
      })
    })
  }

  render() {
      let columns=[];
      this.state.items.forEach((item,idx) => {
        columns.push(
          <Col sm="4" key={idx}>
            <Card className="py-3 card-deals">
                <CardHeader>
                  <div className="card-image-deals">
                    <img className="img-center img-fluid" alt="Image of product" src={item.item_image}></img>
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className="mt-4">{item.item_name}</h4>
                  <h5 className="font-large">{item.item_price}</h5>
                </CardBody>
            </Card>
          </Col>
      )
        if ((idx+1)%3===0) {columns.push(<Row key={null}></Row>)}
      })
    return (
      <div className="">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <div className="section section-examples" data-background-color="black">
          <div className="space-50" />
          <Container className="text-center">
            <Row>
              {columns}
            </Row>
          </Container>
        </div>
      </div>
    )           
  }
}

export default Deals;