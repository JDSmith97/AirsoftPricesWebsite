import React from "react"
import axios from "axios"
import { Row, Button, Table, Card, Col, CardHeader, CardBody } from "reactstrap"
import Loader from "./../../components/Loader"
import "./../../assets/scss/item.scss"

class Item extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: [],
      itemPrices: [],
      loading: true,
      currency: localStorage.getItem("currency"),
    }
  }

  componentDidMount() {
    this.getItemDetails()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      const id = nextProps.id
      this.getItemDetails(id)
    }
  }

  getItemDetails() {
    this.setState({ loading: true }, () => {
      axios
        .get(
          `https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging?id=${this.props.id}`
        )
        .then((res) => {
          const itemInfo = res.data.item
          this.setState({ item: itemInfo, loading: false })
        })
    })
  }

  render() {
    let itemPrices = []

    const urls = {
      patrol_base: "https://www.patrolbase.co.uk/",
      redwolf_airsoft: "https://uk.redwolfairsoft.com/",
      zero_one_airsoft: "https://www.zerooneairsoft.com/",
      airsoft_world: "https://www.airsoftworld.net/",
      land_warrior_airsoft: "https://www.landwarriorairsoft.com/",
      fire_support: "https://www.fire-support.co.uk/",
      wolf_armouries: "https://wolfarmouries.co.uk/",
      skirmshop: "https://www.skirmshop.co.uk/",
      bullseye_country_sport: "https://www.bullseyecountrysport.co.uk/",
      surplus_store: "https://www.surplusstore.co.uk/",
    }

    const storeNames = {
      patrol_base: "Patrol Base",
      redwolf_airsoft: "Redwolf Airsoft",
      zero_one_airsoft: "Zero One Airsoft",
      airsoft_world: "Airsoft World",
      land_warrior_airsoft: "Land Warrior Airsoft",
      fire_support: "Fire Support",
      wolf_armouries: "Wolf Armouries",
      skirmshop: "Skirmshop",
      bullseye_country_sport: "Bullseye Country Sport",
      surplus_store: "Surplus Store",
    }

    if (this.state.item.airsoft_stores) {
      this.state.item.airsoft_stores[0].forEach((store) => {
        itemPrices.push(
          <tr key={store.store} className='text-center'>
            <th scope='row' className='text-white'>
              {storeNames[store.store]}
            </th>
            {store.item_on_sale > 0 ? (
              this.state.currency === "true" ? (
                <td className='text-warning'>{store.item_price_eur}</td>
              ) : (
                <td className='text-warning'>{store.item_price_gbp}</td>
              )
            ) : this.state.currency === "true" ? (
              <td>{store.item_price_eur}</td>
            ) : (
              <td>{store.item_price_gbp}</td>
            )}
            <td>{store.item_stock}</td>
            <td>
              <Button
                className='d-lg-block btn-sm small-font'
                color='info'
                data-placement='right'
                type='button'
                target='_blank'
                href={urls[store.store] + store.item_url}
                style={{ WebkitAppearance: "none" }}
              >
                Website
              </Button>
            </td>
          </tr>
        )
      })
    }

    return (
      <>
        {this.state.loading ? (
          <Loader />
        ) : (
          <Row className='position-relative items-page'>
            <div className='squares square1' />
            <div className='squares square2' />
            <div className='squares square3' />
            <div className='squares square4' />
            <div className='squares square5' />
            <div className='squares square6' />
            <div className='squares square7' />
            <Col
              md={{ size: "8", offset: 2 }}
              lg={{ size: "6", offset: 3 }}
              xl={{ size: "4", offset: 4 }}
            >
              <Card className='my-5'>
                <CardHeader>
                  <div className='card-image-item rounded'>
                    <img
                      className='img-center img-fluid'
                      alt={this.state.item.item_name}
                      src={this.state.item.item_image}
                    ></img>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className='h-25 mt-4'>
                    <h3 className='text-center'>{this.state.item.item_name}</h3>
                  </div>
                  <Table className='item-table table-responsive-sm table-sm-h'>
                    <thead className='small-font'>
                      <tr className='text-center'>
                        <th>Airsoft Store</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody className='small-font'>{itemPrices}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </>
    )
  }
}

export default Item
