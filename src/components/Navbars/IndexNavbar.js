/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
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
  CustomInput
} from "reactstrap";
import Switch from "react-bootstrap-switch";

class IndexNavbar extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      currency: localStorage.getItem('currency')
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }

  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      })
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      })
    }
  }

  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    })
  }

  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    })
  }

  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    })
  }

  scrollToAddAProduct = () => {
    document
      .getElementById("add-a-product")
      .scrollIntoView({ behavior: "smooth", block: 'center' });
    this.setState({
      collapseOpen: false
    })
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  changeCurrency = () => {
    let currency = JSON.parse(this.state.currency)

    localStorage.setItem('currency', !currency)
    window.location.reload(false);
  }

  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <NavbarBrand
              to="/"
              id="navbar-brand"
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
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Airsoft Prices
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar className="mt-2">
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#airsoftprices"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa d-lg-none d-xl-none" />
                  Airsoft Guns
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem tag={Link} to="/categories/Assault Rifle">
                    Assault Rifles
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/categories/Pistol">
                    Pistols
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/categories/Shotgun">
                    Shotguns
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/categories/Sniper Rifle">
                    Sniper Rifles
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/categories/Submachine Gun">
                    Submachine Guns
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/categories/Support Gun">
                    Support Guns
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#airsoftprices"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa d-lg-none d-xl-none" />
                  Manufacturers
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem tag={Link} to="/manufacturers/Toyko Marui">
                    Toyko Marui
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={this.scrollToAddAProduct}
                >
                  <i className="tim-icons icon-bulb-63" /> Want a product added?
                </Button>
                <div className="nav-link mt-1 d-lg-none d-xl-none" onClick={this.scrollToAddAProduct}>
                  <i className="fa d-lg-none d-xl-none pl-1" />
                  Want a product added? <i className="tim-icons icon-bulb-63 pl-2"/> 
                </div> 
              </NavItem>
              <NavItem>
              <div className="nav-link mt-2 mt-md-2 mt-lg-0">
                <strong className="pl-2 pr-2">GBP</strong>
                <Switch value={JSON.parse(this.state.currency)} onChange={() => this.changeCurrency()} onText="€" offText="£"/>
                <strong className="pl-2">EUR</strong>
              </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default IndexNavbar;
