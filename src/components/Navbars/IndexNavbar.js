import React from "react"
import { Link, NavLink } from "react-router-dom"
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap"
import Switch from "react-bootstrap-switch"

class IndexNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      currency: localStorage.getItem("currency"),
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor)
  }

  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
      })
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      })
    }
  }

  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open")
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    })
  }

  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out",
    })
  }

  onCollapseExited = () => {
    this.setState({
      collapseOut: "",
    })
  }

  scrollToAddAProduct = () => {
    document
      .getElementById("add-a-product")
      .scrollIntoView({ behavior: "smooth", block: "center" })
    this.setState({
      collapseOpen: false,
    })
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  changeCurrency = () => {
    let currency = JSON.parse(this.state.currency)

    localStorage.setItem("currency", !currency)
    window.location.reload(false)
  }

  render() {
    return (
      <Row>
        <Navbar
          className={"fixed-top " + this.state.color}
          color-on-scroll='100'
          expand='lg'
        >
          <Container>
            <div className='navbar-translate'>
              <button
                aria-expanded={this.state.collapseOpen}
                className='navbar-toggler navbar-toggler'
                onClick={this.toggleCollapse}
              >
                <span className='navbar-toggler-bar bar1' />
                <span className='navbar-toggler-bar bar2' />
                <span className='navbar-toggler-bar bar3' />
              </button>
              <NavbarBrand
                to='/'
                id='navbar-brand'
                tag={Link}
                onClick={this.scrollToTop}
              >
                Airsoft Prices
              </NavbarBrand>
            </div>
            <Collapse
              className={"justify-content-end " + this.state.collapseOut}
              navbar
              isOpen={this.state.collapseOpen}
              onExiting={this.onCollapseExiting}
              onExited={this.onCollapseExited}
            >
              <div className='navbar-collapse-header'>
                <Row>
                  <Col className='collapse-brand' xs='6'>
                    <a href='/'> Airsoft Prices</a>
                  </Col>
                  <Col className='collapse-close text-right' xs='6'>
                    <button
                      aria-expanded={this.state.collapseOpen}
                      className='navbar-toggler'
                      onClick={this.toggleCollapse}
                    >
                      <i className='tim-icons icon-simple-remove' />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar className='mt-2'>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to='/deals'
                    className='nav-link d-none d-lg-block font-weight-light'
                    onClick={this.scrollToTop}
                  >
                    Top Deals
                  </NavLink>
                  <NavLink
                    tag={Link}
                    to='/deals'
                    className='nav-link pl-2 mb-1 d-lg-none d-xl-none font-weight-light'
                    onClick={this.scrollToTop}
                  >
                    Top Deals
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color='default'
                    data-toggle='dropdown'
                    href='#airsoftprices'
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fa d-lg-none d-xl-none' />
                    Airsoft Guns
                  </DropdownToggle>
                  <DropdownMenu className='dropdown-with-icons'>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Assault Rifle'
                      onClick={this.scrollToTop}
                    >
                      Assault Rifles
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Pistol'
                      onClick={this.scrollToTop}
                    >
                      Pistols
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Shotgun'
                      onClick={this.scrollToTop}
                    >
                      Shotguns
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Sniper Rifle'
                      onClick={this.scrollToTop}
                    >
                      Sniper Rifles
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Submachine Gun'
                      onClick={this.scrollToTop}
                    >
                      Submachine Guns
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Support Gun'
                      onClick={this.scrollToTop}
                    >
                      Support Guns
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color='default'
                    data-toggle='dropdown'
                    href='#airsoftprices'
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fa d-lg-none d-xl-none' />
                    Magazines
                  </DropdownToggle>
                  <DropdownMenu className='dropdown-with-icons'>
                    <DropdownItem
                      tag={Link}
                      to='/categories/STANAG Magazine'
                      onClick={this.scrollToTop}
                    >
                      STANAG / AR / M4 Magazine
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Pistol Magazine'
                      onClick={this.scrollToTop}
                    >
                      Pistol Magazine
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Gas Magazine'
                      onClick={this.scrollToTop}
                    >
                      Gas Magazine
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Sniper Magazine'
                      onClick={this.scrollToTop}
                    >
                      Sniper Magazine
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Box Magazine'
                      onClick={this.scrollToTop}
                    >
                      Box Magazine
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Other Magazine'
                      onClick={this.scrollToTop}
                    >
                      Other Magazine
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color='default'
                    data-toggle='dropdown'
                    href='#airsoftprices'
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fa d-lg-none d-xl-none' />
                    Upgrades & Parts
                  </DropdownToggle>
                  <DropdownMenu className='dropdown-with-icons'>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Hop Up Units & Rubbers'
                      onClick={this.scrollToTop}
                    >
                      Hop Up Units & Rubbers
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Inner Barrels'
                      onClick={this.scrollToTop}
                    >
                      Inner Barrels
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Electric Interal Parts'
                      onClick={this.scrollToTop}
                    >
                      Electric Internal Parts
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Gas Interal Parts'
                      onClick={this.scrollToTop}
                    >
                      Gas Internal Parts
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Spring Interal Parts'
                      onClick={this.scrollToTop}
                    >
                      Spring Internal Parts
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/categories/Other Magazine'
                      onClick={this.scrollToTop}
                    >
                      Magazine Parts
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color='default'
                    data-toggle='dropdown'
                    href='#airsoftprices'
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='fa d-lg-none d-xl-none' />
                    Manufacturers
                  </DropdownToggle>
                  <DropdownMenu className='dropdown-with-icons'>
                    <DropdownItem
                      tag={Link}
                      to='/manufacturers/Ares'
                      onClick={this.scrollToTop}
                    >
                      Ares
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/manufacturers/ARMORER WORKS'
                      onClick={this.scrollToTop}
                    >
                      ARMORER WORKS
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/manufacturers/ASG'
                      onClick={this.scrollToTop}
                    >
                      ASG
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/manufacturers/G&G'
                      onClick={this.scrollToTop}
                    >
                      G&G
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/manufacturers/ICS'
                      onClick={this.scrollToTop}
                    >
                      ICS
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to='/manufacturers/Tokyo Marui'
                      onClick={this.scrollToTop}
                    >
                      Tokyo Marui
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <div className='nav-link mt-2 mt-md-2 mt-lg-0'>
                    <strong className='pl-2 pr-2'>GBP</strong>
                    <Switch
                      value={JSON.parse(this.state.currency)}
                      onChange={() => this.changeCurrency()}
                      onText='€'
                      offText='£'
                    />
                    <strong className='pl-2'>EUR</strong>
                  </div>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </Row>
    )
  }
}

export default IndexNavbar
