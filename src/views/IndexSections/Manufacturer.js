import React from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import Chip from "@material-ui/core/Chip"
import Loader from "./../../components/Loader/ItemsPageLoader"
import axios from "axios"
import "./../../assets/scss/dealCard.scss"
import FilterDrawer from "./../../components/Menu/Filter.js"

class Manufacturers extends React.Component {
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
      manufacturer: this.props.manufacturer,
      categories: [],
      toggleFilters: false,
      toggleCategoryDropdownBtn: false,
      selectedCategory: null,
      currency: localStorage.getItem("currency"),
    }
  }

  componentDidUpdate() {
    const manufacturer = this.props.manufacturer
    if (manufacturer !== this.state.manufacturer) {
      window.location.reload(false)
    }
  }

  getDeals = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getallitems",
          {
            params: {
              limit: this.state.limit,
              offset: 0,
              category: this.state.selectedCategory,
              manufacturer: this.state.manufacturer,
            },
          }
        )
        .then((res) => {
          const itemInfo = res.data
          this.setState({ items: itemInfo, loading: false })
          resolve("Data Fetched")
        })
    })
  }

  getLength = () => {
    axios
      .get(
        `https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getallitems`,
        {
          params: {
            getLength: true,
            category: this.state.selectedCategory,
            manufacturer: this.state.manufacturer,
          },
        }
      )
      .then((res) => {
        const dealsLength = res.data
        this.setState({ dealLength: dealsLength })
      })
  }

  getCategoryFilters = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getdetails",
          {
            params: {
              allCategories: true,
            },
          }
        )
        .then((res) => {
          const categoryFilters = res.data
          this.setState({ categories: categoryFilters })
          resolve("Data Fetched")
        })
    })
  }

  filterCategories = (category) => {
    this.setState({ selectedCategory: category, loading: true }, () => {
      this.getDeals(category, this.state.manufacturer).then((data) => {
        this.getLength(category, this.state.selectedManufacturer)
        this.setState({ refresh: true, loading: false })
      })
    })
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.getDeals()
      this.getLength()
      this.getCategoryFilters()
    })
  }

  clearCategoryFilter = () => {
    this.setState({ selectedCategory: null, loading: true }, () => {
      this.getDeals(null, this.state.selectedManufacturer).then((data) => {
        this.getLength(null, this.state.selectedManufacturer)
        this.setState({ refresh: true, loading: false })
      })
    })
  }

  loadMore = () => {
    this.setState(
      {
        limit: this.state.limit + this.state.counter,
      },
      () => {
        this.getDeals().then((data) => {
          this.scrollToRow()
        })
      }
    )
  }

  toggle = () => {
    this.setState({
      toggleFilters: !this.state.toggleFilters,
    })
  }

  toggleCategoryDropdownBtn = () => {
    this.setState({
      toggleCategoryDropdownBtn: !this.state.toggleCategoryDropdownBtn,
    })
  }

  scrollToRow = () => {
    document
      .getElementById(this.state.limit - this.state.counter)
      .scrollIntoView({ behavior: "smooth" })
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    let categoryOptions = []
    let columns = []

    if (this.state.refresh) {
      columns = []
    }

    this.state.items.forEach((item, idx) => {
      columns.push(
        <Col
          sm='12'
          md='6'
          lg='4'
          key={`{${item.store} ${item.item_id}`}
          id={idx}
        >
          <Link to={`/item/${item.item_id}`} onClick={this.scrollToTop}>
            <Card className='py-3 card-deals'>
              <CardHeader>
                <div className='card-image-deals rounded'>
                  <img
                    className='img-center img-fluid'
                    alt={item.item_name}
                    src={item.item_image}
                  ></img>
                </div>
              </CardHeader>
              <CardBody>
                <div className='h-25 my-4'>
                  <h4 className=''>{item.item_name}</h4>
                </div>
                <div className='h-25'>
                  {item.item_discount > 0 ? (
                    this.state.currency === "true" ? (
                      <h5 className='font-large text-warning'>
                        <strong>{item.item_price_eur}</strong>
                      </h5>
                    ) : (
                      <h5 className='font-large text-warning'>
                        <strong>{item.item_price_gbp}</strong>
                      </h5>
                    )
                  ) : this.state.currency === "true" ? (
                    <h5 className='font-large'>{item.item_price_eur}</h5>
                  ) : (
                    <h5 className='font-large'>{item.item_price_gbp}</h5>
                  )}
                </div>
                <div className='h-25'>
                  {item.item_discount > 0 ? (
                    this.state.currency === "true" ? (
                      <p>
                        <strong>{item.item_discount_eur}</strong> savings!
                      </p>
                    ) : (
                      <p>
                        <strong>{item.item_discount_gbp}</strong> savings!
                      </p>
                    )
                  ) : null}
                </div>
              </CardBody>
            </Card>
          </Link>
        </Col>
      )
    })

    this.state.categories.forEach((category) => {
      categoryOptions.push(
        <DropdownItem
          key={category}
          onClick={() => this.filterCategories(category)}
        >
          {category}
        </DropdownItem>
      )
    })

    return (
      <>
        {!this.state.loading ? (
          <div className='section' data-background-color='black'>
            <div className='space-50' />
            <Container className='text-center'>
              <Row>
                <div className='w-100 px-3'>
                  <Row>
                    <Col className='d-none d-lg-block d-xl-block'>
                      <div className='border-primary mb-4 float-left'>
                        <ButtonDropdown
                          isOpen={this.state.toggleCategoryDropdownBtn}
                          toggle={this.toggleCategoryDropdownBtn}
                        >
                          <div className='dropdown-content'>
                            <DropdownToggle caret className='px-3' color='info'>
                              Product Type
                            </DropdownToggle>
                            <DropdownMenu>{categoryOptions}</DropdownMenu>
                          </div>
                        </ButtonDropdown>
                      </div>
                    </Col>
                    <Col>
                      <Row className='mb-4'>
                        <Col xs='10' md='10' lg='12' className='w-100 chip-col'>
                          <div className='w-100 text-left'>
                            {this.state.selectedCategory ? (
                              <div className='pb-2 float-lg-right float-md-left chip-div'>
                                <Chip
                                  className='filter-chip mx-3'
                                  label={this.state.selectedCategory}
                                  onDelete={this.clearCategoryFilter}
                                />
                              </div>
                            ) : null}
                          </div>
                        </Col>
                        <Col
                          xs='2'
                          md='2'
                          className='d-block d-sm-block d-md-block d-lg-none'
                        >
                          <div className='w-100 border-primary float-left'>
                            <FilterDrawer
                              categoryOptions={this.state.categories}
                              filterCategories={this.filterCategories}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Row>
              {columns.length ? (
                <Row>{columns}</Row>
              ) : (
                <Row>
                  <div className='w-100'>
                    <h3 className='text-center'>No products found!</h3>
                  </div>
                </Row>
              )}
              {this.state.limit < this.state.dealLength ? (
                <Row className='mt-5'>
                  <div className='w-100'>
                    <p className='pb-2'>
                      Showing {this.state.limit} of {this.state.dealLength}{" "}
                      results
                    </p>
                    <Button
                      color='primary'
                      className='text-center text-uppercase'
                      onClick={this.loadMore}
                    >
                      Load more products
                    </Button>
                  </div>
                </Row>
              ) : (
                <Row className='mt-5'>
                  <div className='w-100'>
                    <p>
                      Showing {this.state.dealLength} of {this.state.dealLength}{" "}
                      results
                    </p>
                  </div>
                </Row>
              )}
            </Container>
          </div>
        ) : (
          <Loader maxRows={2} isItemsPage={true} manufacturer={true}/>
        )}
      </>
    )
  }
}

export default Manufacturers
