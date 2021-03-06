import React from "react";
import axios from "axios";

// reactstrap components
import { Container } from "reactstrap";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';


const CustomAutocomplete = withStyles({
  root: {
    "& .MuiInputLabel-formControl": {
      fontFamily: "Poppins",
      color: "grey"
    },
    "& .MuiInputBase-root": {
      borderColor: "white !important",
    }
  },
  inputRoot: {
    color: "white",
    borderWidth: "2px",
    fontFamily: "Poppins",
  },
  popper: {
    zIndex: "800 !important",
  },
  paper: {
    fontFamily: "Poppins",
    "& a": {
      color: "black !important",
    }
  }
})(Autocomplete);


class PageHeader extends React.Component {

  state = {
    allItems: [],
    value: '',
    redirect: false,
    isOpen: false
  }
  

  componentDidMount() {
    axios.get(`https://3eg3r872u3.execute-api.eu-west-2.amazonaws.com/staging/getallitems?offset=0`)
      .then(res => {
        const itemInfo = res.data;
        this.setState({ allItems: itemInfo });
      })
  }

  handleChange(e, value) {
    this.setState({ value: value });
  }

  handleKeyPress(target, value) {
    if(target.charCode===13){
      if(this.state.value && this.state.value.item_id >= 0) {
        this.setState({ redirect: true });
      }
    }
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    const defaultProps = {
      options: this.state.allItems,
      getOptionLabel: (option) => option.item_name,
    };

    if(this.state.redirect) {
      this.scrollToTop()
      return <Redirect to={`/item/${this.state.value.item_id}`}/>
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
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Airsoft Prices</h1>
            <h3 className="d-none d-sm-block">
              Compare Prices for Airsoft Products
            </h3>
            <CustomAutocomplete
              {...defaultProps}
              id="auto-complete"
              forcePopupIcon={false}
              clearOnEscape={true}
              openOnFocus={false}
              value={this.state.value}
              getOptionLabel={(option) => option.item_name}
              renderOption={option => (
                <React.Fragment>
                  <NavLink to={`item/${option.item_id}`} onClick={this.scrollToTop}>
                    {option.item_name}
                  </NavLink>
                </React.Fragment>
              )}
              onKeyPress={(e, value) => this.handleKeyPress(e, value)}
              onChange={(e, value) => this.handleChange(e, value)}
              renderInput={(params) => 
                <TextField {...params} label="Enter a product" margin="normal" />
              }
              ListboxProps={{ style: { maxHeight: "15rem" }, position: "bottom-start" }}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
