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

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Item from "views/IndexSections/Item.js";
import Footer from "components/Footer/Footer.js";

import TopDeals from "views/IndexSections/TopDeals.js";
import AddAProduct from "views/IndexSections/AddAProduct.js";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <Item id={this.props.match.params.id}/>
          <div className="main">
            <TopDeals /> 
            <AddAProduct />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
