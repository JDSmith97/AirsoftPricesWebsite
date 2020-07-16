import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, Card, CardBody, CardHeader, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Chip from '@material-ui/core/Chip';
import Loader from "react-loader-spinner";
import axios from "axios";
import './../../assets/scss/dealCard.scss';
import './../../assets/scss/blobs.scss';
import FilterDrawer from './../../components/Menu/Filter.js'

class Deals extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      items: [],
      itemPrices: [],
      loading: true,
      limit: 15,
      counter: 15,
      refresh: false,
      dealLength: 0,
      categories: [],
      manufacturers: [],
      toggleFilters: false,
      toggleCategoryDropdownBtn: false,
      toggleManufacturerDropdownBtn: false,
      selectedCategory: null,
      selectedManufacturer: null,
      currency: localStorage.getItem('currency')
    }
  }

  getDeals = (category, manufacturer) => {
    return new Promise((resolve, reject) => {
      axios.get("https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getalldeals", {
        params: {
          limit: this.state.limit,
          offset: 0,
          category: category,
          manufacturer: manufacturer
        }
      }).then(res => {
          const itemInfo = res.data
          this.setState({items: itemInfo, loading: false})
          resolve('Data Fetched')
        })
    })
  }

  getLength = (category, manufacturer) => {
    axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getalldeals`, {
      params: {
        getLength: true,
        category: category,
        manufacturer: manufacturer
      }
    })
      .then(res => {
        const dealsLength = res.data
        this.setState({dealLength: dealsLength})
      })
  }

  getCategoryFilters = () => {
    return new Promise((resolve, reject) => {
      axios.get("https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getdetails", {
        params: {
          allCategories: true
        }
      }).then(res => {
          const categoryFilters = res.data
          this.setState({categories: categoryFilters})
          resolve('Data Fetched')
        })
        
    })
  }

  getManufacturerFilters = () => {
    return new Promise((resolve, reject) => {
      axios.get("https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getdetails", {
        params: {
          allManufacturers: true
        }
      }).then(res => {
          const manufacturerFilters = res.data
          this.setState({manufacturers: manufacturerFilters})
          resolve('Data Fetched')
        })
        
    })
  }

  filterCategories = (category) => {
    this.getDeals(category, this.state.selectedManufacturer).then(data => {
      this.getLength(category, this.state.selectedManufacturer)
      this.setState({refresh: true, selectedCategory: category})
    })
  }

  filterManufacturers = (manufacturer) => {
    this.setState({selectedManufacturer: manufacturer})
    this.getDeals(this.state.selectedCategory, manufacturer).then(data => {
      this.getLength(this.state.selectedCategory, manufacturer)
      this.setState({refresh: true})
    })
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.getDeals()
      this.getLength()
      this.getCategoryFilters()
      this.getManufacturerFilters()
    })
  }

  clearCategoryFilter = () => {
    this.setState({selectedCategory: null})
    this.getDeals(null, this.state.selectedManufacturer).then(data => {
      this.getLength(null, this.state.selectedManufacturer)
      this.setState({refresh: true})
    })
  }

  clearManufacturerFilter = () => {
    this.setState({selectedManufacturer: null})
    this.getDeals(this.state.selectedCategory, null).then(data => {
      this.getLength(this.state.selectedCategory, null)
      this.setState({refresh: true})
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
  }

  toggleCategoryDropdownBtn = () => {
    this.setState({
      toggleCategoryDropdownBtn: !this.state.toggleCategoryDropdownBtn
    })
  }

  toggleManufacturerDropdownBtn = () => {
    this.setState({
      toggleManufacturerDropdownBtn: !this.state.toggleManufacturerDropdownBtn
    })
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
      let categoryOptions = []
      let manufacturerOptions = []
      let columns = []

      if(this.state.refresh) {
        columns = []
      }

      this.state.items.forEach((item,idx) => {
        columns.push(
          <Col sm="12" md="6" lg="4" key={`{${item.store} ${item.item_id}`} id={idx}>
            <Link to={`/item/${item.item_id}`} onClick={this.scrollToTop}>
              <Card className="py-3 card-deals">
                <CardHeader>
                  <div className="card-image-deals rounded">
                    <img className="img-center img-fluid" alt={item.item_name} src={item.item_image}></img>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="h-25 mt-4">
                    <h4 className="">{item.item_name}</h4>
                  </div>
                  <div className="h-25">
                    {this.state.currency === "true" ? (
                      <h5 className="font-large text-warning"><strong>{item.item_price_eur}</strong></h5>
                    ) : (
                      <h5 className="font-large text-warning"><strong>{item.item_price_gbp}</strong></h5>
                    )}
                  </div>
                  <div className="h-25">
                    {this.state.currency === "true" ? (
                      <p><strong>{item.item_discount_eur}</strong> savings!</p>
                    ) : (
                      <p><strong>{item.item_discount_gbp}</strong> savings!</p>
                    )}
                  </div>
                </CardBody>
              </Card>
            </Link>
          </Col>
        )
      })

      this.state.categories.forEach((category) => {
        categoryOptions.push(
          <DropdownItem key={category} onClick={() => this.filterCategories(category)}>{category}</DropdownItem>
        )
      })

      this.state.manufacturers.forEach((manufacturer) => {
        manufacturerOptions.push(
          <DropdownItem key={manufacturer} onClick={() => this.filterManufacturers(manufacturer)}>{manufacturer}</DropdownItem>
        )
      })
    return (
      <div className="">
        <img
          alt=""
          className="bean-blob"
          src={require("assets/img/blob.png")}
        />
        <img
          alt=""
          className="bean-blob2"
          src={require("assets/img/blob.png")}
        />
        <img
          alt=""
          className="blob-path4-0"
          src={require("assets/img/path4.png")}
        />
        <img
          alt=""
          className="blob-path4-1"
          src={require("assets/img/path4.png")}
        />
        <img
          alt=""
          className="waves"
          src={require("assets/img/waves.png")}
        />
        <img
          alt=""
          className="triangle"
          src={require("assets/img/triunghiuri.png")}
        />
        <img
          alt=""
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
                      <Col className="d-none d-lg-block d-xl-block">
                        <div className="border-primary mb-4 float-left">
                          <ButtonDropdown isOpen={this.state.toggleCategoryDropdownBtn} toggle={this.toggleCategoryDropdownBtn}>
                            <div className="dropdown-content">
                              <DropdownToggle caret className="px-3" color="info">
                                Product Type
                              </DropdownToggle>
                              <DropdownMenu>
                                {categoryOptions}
                              </DropdownMenu>
                            </div>
                          </ButtonDropdown>
                          <ButtonDropdown className="ml-3" isOpen={this.state.toggleManufacturerDropdownBtn} toggle={this.toggleManufacturerDropdownBtn}>
                            <div className="dropdown-content">
                            <DropdownToggle caret className="px-3" color="info">
                              Manufacturer
                            </DropdownToggle>
                            <DropdownMenu>
                              {manufacturerOptions}
                            </DropdownMenu>
                            </div>
                          </ButtonDropdown>
                        </div>
                      </Col>
                      <Col>
                        <Row className="mb-4">
                          <Col xs="10" md="10" lg="12" className="w-100 chip-col">
                            <div className="w-100 text-left">
                              {this.state.selectedManufacturer ? (
                                <div className="pb-2 float-lg-right float-md-left chip-div">
                                <Chip
                                  className="filter-chip"
                                  label={this.state.selectedManufacturer}
                                  onDelete={this.clearManufacturerFilter}
                                />
                              </div>
                              ) : (
                                null
                              )}
                              {this.state.selectedCategory ? (
                                <div className="pb-2 float-lg-right float-md-left chip-div">
                                  <Chip
                                    className="filter-chip mx-3"
                                    label={this.state.selectedCategory}
                                    onDelete={this.clearCategoryFilter}
                                  />
                                </div>
                              ) : (
                                null
                              )}
                            </div>
                          </Col>
                          <Col xs="2" md="2" className="d-block d-sm-block d-md-block d-lg-none">
                            <div className="w-100 border-primary float-left">
                              <FilterDrawer categoryOptions={this.state.categories} manufacturerOptions={this.state.manufacturers} filterCategories={this.filterCategories} filterManufacturers={this.filterManufacturers}/>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
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