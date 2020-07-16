import React from "react";
import axios from "axios";
import { Container, Button, Table, Card, Col, CardHeader, CardBody } from "reactstrap";
import Loader from "react-loader-spinner";
import './../../assets/scss/item.scss';

class Item extends React.Component {

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
      axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging?id=${this.props.id}`)
        .then(res => {
          const itemInfo = res.data.item
          this.setState({item: itemInfo, loading: false})
      })
    })
  }

  render() {
    let itemPrices = []

    const urls = {
      "patrol_base": "https://www.patrolbase.co.uk/",
      "redwolf_airsoft": "https://uk.redwolfairsoft.com/",
      "zero_one_airsoft": "https://www.zerooneairsoft.com/",
      "airsoft_world":   "https://www.airsoftworld.net/",
      "land_warrior_airsoft": "https://www.landwarriorairsoft.com/",
      "fire_support": "https://www.fire-support.co.uk/",
      "wolf_armouries": "https://wolfarmouries.co.uk/",
      "skirmshop": "https://www.skirmshop.co.uk/",
      "bullseye_country_sport": "https://www.bullseyecountrysport.co.uk/",
      "surplus_store": "https://www.surplusstore.co.uk/"
    }

    const storeNames = {
      "patrol_base": "Patrol Base",
      "redwolf_airsoft": "Redwolf Airsoft",
      "zero_one_airsoft": "Zero One Airsoft",
      "airsoft_world":   "Airsoft World",
      "land_warrior_airsoft": "Land Warrior Airsoft",
      "fire_support": "Fire Support",
      "wolf_armouries": "Wolf Armouries",
      "skirmshop": "Skirmshop",
      "bullseye_country_sport": "Bullseye Country Sport",
      "surplus_store": "Surplus Store"
    }

    if(this.state.item.airsoft_stores){
      this.state.item.airsoft_stores[0].forEach(store => {
        itemPrices.push(
          <tr key={store.store}>
            <th scope="row">{storeNames[store.store]}</th>
            {this.state.currency === "true" ?
            (
              <td>{store.item_price_eur}</td>
            ) : (
              <td>{store.item_price_gbp}</td>
            )}
            <td>{store.item_stock}</td>
            <td>
              <Button
                className="d-lg-block btn-sm small-font"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={urls[store.store] + store.item_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      })
    }

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
            <div className="content-center brand">
              <Col className="ml-auto mr-auto" md="12">
                <Card className="card-sm-w">
                  <Container>
                      <CardHeader>
                        <div className="card-image-deals rounded">
                          <img className="img-center img-fluid" alt={this.state.item.item_name} src={this.state.item.item_image}></img>
                        </div>
                        {/* <div className="content-left">
                          <img className="image img-center img-fluid rounded shadow-lg" alt="Image of product" src={this.state.item.item_image}></img>
                        </div> */}
                        <h3 className="d-sm-block">
                          {this.state.item.item_name}
                        </h3>
                      </CardHeader>
                      <CardBody className="p-0">
                        <Table className="table-responsive-sm table-responsive-md table-sm-h table-md-h">
                          <thead className="small-font">
                            <tr>
                              <th>Airsoft Store</th>
                              <th>Price</th>
                              <th>Stock Status</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody className="small-font">
                            {itemPrices}
                          </tbody>
                        </Table>
                      </CardBody>   
                  </Container>
                </Card>
              </Col>
            </div> 
          )}    
      </div>
    );
  }
}

export default Item;
