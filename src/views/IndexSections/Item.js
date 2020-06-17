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
    const patrolBaseURL = "https://www.patrolbase.co.uk/"
    const surplusStoreURL = "https://www.surplusstore.co.uk/"
    const redwolfAirsoftURL = "http://uk.redwolfairsoft.com/"
    const zeroOneAirsoftURL = "https://www.zerooneairsoft.com/"
    const airsoftWorldURL = "https://www.airsoftworld.net/"
    const landWarriorAirsoftURL = "https://www.landwarriorairsoft.com/"
    const fireSupportURL = "https://www.fire-support.co.uk/"
    const wolfArmouriesURL = "https://wolfarmouries.co.uk/"
    const skirmshopURL = "https://www.skirmshop.co.uk/"
    const bullseyeURL = "https://www.bullseyecountrysport.co.uk/"

    this.state.item.map(item => {
      if(!item.patrol_base_price == ""){
        itemPrices.push(
          <tr key="patrolBase">
            <th scope="row" key="patrolBaseName">Patrol Base</th>
            <td key="patrolBasePrice">{item.patrol_base_price}</td>
            <td key="patrolBaseStock">{item.patrol_base_stock}</td>
            <td key="patrolBaseLink">
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
      // if(!item.surplus_store_price == ""){
      //   itemPrices.push(
      //     <tr key="surplusStore">
      //       <th scope="row" key="surplusName">Surplus Store</th>
      //       <td key="surplusPrice">{item.surplus_store_price}</td>
      //       <td key="surplusStock">{item.surplus_store_stock}</td>
      //       <td key="surplusLink">
      //         <Button
      //           className="d-lg-block"
      //           color="info"
      //           data-placement="right"
      //           type="button"
      //           target="_blank"
      //           href={surplusStoreURL + item.surplusstore_url}
      //         >
      //           Website
      //         </Button>
      //       </td>
      //     </tr>
      //   )
      // }
      if(!item.redwolf_airsoft_price == ""){
        itemPrices.push(
          <tr key="redwolfAirsoft">
            <th scope="row" key="redwolfName">Redwolf Airsoft</th>
            <td key="redwolfPrice">{item.redwolf_airsoft_price}</td>
            <td key="redwolfStock">{item.redwolf_airsoft_stock}</td>
            <td key="redwolfLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={redwolfAirsoftURL + item.redwolfairsoft_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.zero_one_airsoft_price == ""){
        itemPrices.push(
          <tr key="zeroOneAirsoft">
            <th scope="row" key="zeroOneName">Zero One Airsoft</th>
            <td key="zeroOnePrice">{item.zero_one_airsoft_price}</td>
            <td key="zeroOneStock">{item.zero_one_airsoft_stock}</td>
            <td key="zeroOneLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={zeroOneAirsoftURL + item.zerooneairsoft_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.airsoft_world_price == ""){
        itemPrices.push(
          <tr key="airsoftWorld">
            <th scope="row" key="airsoftWorldName">Airsoft World</th>
            <td key="airsoftWorldPrice">{item.airsoft_world_price}</td>
            <td key="airsoftWorldStock">{item.airsoft_world_stock}</td>
            <td key="airsoftWorldLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={airsoftWorldURL + item.airsoftworld_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.land_warrior_airsoft_price == ""){
        itemPrices.push(
          <tr key="landWarrior">
            <th scope="row" key="landWarriorName">Land Warrior Airsoft</th>
            <td key="landWarriorPrice">{item.land_warrior_airsoft_price}</td>
            <td key="landWarriorStock">{item.land_warrior_airsoft_stock}</td>
            <td key="landWarriorLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={landWarriorAirsoftURL + item.landwarriorairsoft_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.fire_support_price == ""){
        itemPrices.push(
          <tr key="fireSupport">
            <th scope="row" key="fireSupportName">Fire Support</th>
            <td key="fireSupportPrice">{item.fire_support_price}</td>
            <td key="fireSupportStock">{item.fire_support_stock}</td>
            <td key="fireSupportLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={fireSupportURL + item.firesupport_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.wolf_armouries_price == ""){
        itemPrices.push(
          <tr key="wolfArmouries">
            <th scope="row" key="wolfArmouriesName">Wolf Armouries</th>
            <td key="wolfArmouriesPrice">{item.wolf_armouries_price}</td>
            <td key="wolfArmouriesStock">{item.wolf_armouries_stock}</td>
            <td key="wolfArmouriesLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={wolfArmouriesURL + item.wolfarmouries_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.skirmshop_price == ""){
        itemPrices.push(
          <tr key="wolfArmouries">
            <th scope="row" key="wolfArmouriesName">Skirmshop UK</th>
            <td key="wolfArmouriesPrice">{item.skirmshop_price}</td>
            <td key="wolfArmouriesStock">{item.skirmshop_stock}</td>
            <td key="wolfArmouriesLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={skirmshopURL + item.skirmshop_url}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      }
      if(!item.bullseye_country_sport_price == ""){
        itemPrices.push(
          <tr key="bullseyeCountrySport">
            <th scope="row" key="bullseyeSport">Bullseye Country Sport</th>
            <td key="bullseyePrice">{item.bullseye_country_sport_price}</td>
            <td key="bullseyeStock">{item.bullseye_country_sport_stock}</td>
            <td key="bullseyeLink">
              <Button
                className="d-lg-block"
                color="info"
                data-placement="right"
                type="button"
                target="_blank"
                href={bullseyeURL + item.bullseyecountrysport_url}
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
