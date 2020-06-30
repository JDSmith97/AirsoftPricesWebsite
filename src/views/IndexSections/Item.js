import React from "react";
import axios from "axios";
import { Container, Button, Table, Card, Col, CardHeader, CardBody } from "reactstrap";
import Loader from "react-loader-spinner";
import './../../assets/scss/item.scss';

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

    const urls = {
      "Patrol Base": "https://www.patrolbase.co.uk/",
      "Redwolf Airsoft": "http://uk.redwolfairsoft.com/",
      "Zero One Airsoft": "https://www.zerooneairsoft.com/",
      "Airsoft World":   "https://www.airsoftworld.net/",
      "Land Warrior Airsoft": "https://www.landwarriorairsoft.com/",
      "Fire Support": "https://www.fire-support.co.uk/",
      "Wolf Armouries": "https://wolfarmouries.co.uk/",
      "Skirmshop UK": "https://www.skirmshop.co.uk/",
      "Bullseye Country Sport": "https://www.bullseyecountrysport.co.uk/",
      "Surplus Store": "https://www.surplusstore.co.uk/"
    }

    const addToTable = (storeName, price, stockStatus, url) => {
      if(!price == ""){
        itemPrices.push(
          <tr>
            <th scope="row">{storeName}</th>
            <td>{price}</td>
            <td>{stockStatus}</td>
            <td>
              <Button
                className="d-lg-block btn-sm small-font"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={urls[storeName] + url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
    }

    this.state.item.map(item => {
      addToTable("Patrol Base", item.patrol_base_price, item.patrol_base_stock, item.patrolbase_url)
      addToTable("Redwolf Airsoft", item.redwolf_airsoft_price, item.redwolf_airsoft_stock, item.redwolfairsoft_url)
      addToTable("Zero One Airsoft", item.zero_one_airsoft_price, item.zero_one_airsoft_stock, item.zerooneairsoft_url)
      addToTable("Airsoft World", item.airsoft_world_price, item.airsoft_world_stock, item.airsoftworld_url)
      addToTable("Land Warrior Airsoft", item.land_warrior_airsoft_price, item.land_warrior_airsoft_stock, item.landwarriorairsoft_url)
      addToTable("Fire Support", item.fire_support_price, item.fire_support_stock, item.firesupport_url)
      addToTable("Wolf Armouries", item.wolf_armouries_price, item.wolf_armouries_stock, item.wolfarmouries_url)
      addToTable("Skirmshop UK", item.skirmshop_price, item.skirmshop_stock, item.skirmshop_url)
      addToTable("Bullseye Country Sport", item.bullseye_country_sport_price, item.bullseye_country_sport_stock, item.bullseyecountrysport_url)
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
                <Col className="ml-auto mr-auto" md="12">
                  <Card className="card-sm-w">
                    <Container>
                        <CardHeader>
                          <div className="content-left">
                            <img className="image img-center img-fluid rounded shadow-lg" alt="Image of product" src={item.item_image}></img>
                          </div>
                          <h3 className="d-sm-block">
                            {item.item_name}
                          </h3>
                        </CardHeader>
                        <CardBody className="p-0">
                          <Table key={item.item_id} className="table-responsive table-sm-h">
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
            ))  
          )}    
      </div>
    );
  }
}

export default Item;
