import React from "react";
import axios from "axios";

// reactstrap components
import { Container, Button, Table, Card, Col, CardHeader, CardBody } from "reactstrap";
import Loader from "react-loader-spinner";

class Item extends React.Component {

  state = {
    item: [],
    itemPrices: [],
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging?id=${this.props.id}`)
        .then(res => {
          const itemInfo = res.data
          this.setState({item: itemInfo, loading: false})
      })
    })
  }

  render() {
    let itemPrices = []
    let patrolBaseURL = "https://www.patrolbase.co.uk/"
    let surplusStoreURL = "https://www.surplusstore.co.uk/"
    this.state.item.map(item => {
      if(!item.patrol_base_price == ""){
        itemPrices.push(
          <tr key="PatrolBase">
            <th scope="row" key="patrolBaseName">Patrol Base</th>
            <td key="patrolBasePrice">{item.patrol_base_price}</td>
            <td key="patrolBaseStock">{item.patrol_base_stock}</td>
            <td key="PatrolBaseLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={patrolBaseURL + item.patrolbase_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.surplus_store_price == ""){
        itemPrices.push(
          <tr key="SurplusStore">
            <th scope="row" key="surplusName">Surplus Store</th>
            <td key="surplusPrice">{item.surplus_store_price}</td>
            <td key="surplusStock">{item.surplus_store_stock}</td>
            <td key="PatrolBaseLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={surplusStoreURL + item.surplusstore_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
    })

    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        {this.state.loading ? (
          <div className="content-center brand">
            <Col className="ml-auto mr-auto" lg="15">
              <Card className="card-user">
                <Container>
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <div className="content-center">
                      <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/>
                      <h3>Loading...</h3>
                    </div>
                  </CardBody>
                </Container>
              </Card>
            </Col>
          </div>
          ) : (
            this.state.item.map(item => (
              <div className="content-center brand">
                <Col className="ml-auto mr-auto" lg="15">
                  <Card className="card-user">
                    <Container>
                        <CardHeader>
                          <div className="content-left">
                            <img className="card-user image img-center img-fluid rounded shadow-lg" alt="Image of product" src={item.item_image}></img>
                          </div>
                          <h3 className="d-sm-block">
                            {item.item_name}
                          </h3>
                        </CardHeader>
                        <CardBody>
                          <Table key={item.item_id} style={{paddingLeft:"100px"}}>
                            <thead>
                              <tr>
                                <th>Airsoft Store</th>
                                <th>Price</th>
                                <th>Stock Status</th>
                                <th>Link</th>
                              </tr>
                            </thead>
                            <tbody>
                            {itemPrices}
                            </tbody>
                          </Table>
                        </CardBody>   
                    </Container>
                  </Card>
                </Col>
              </div>
            ))  
          )}    
      </div>
    );
  }
}

export default Item;
