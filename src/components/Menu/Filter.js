import React from 'react'
// icons
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
// components
import List from '@material-ui/core/List'
import { ListItem, ListItemText, Divider } from '@material-ui/core'
import { Button, Collapse } from 'reactstrap'
// styles
import { withStyles } from "@material-ui/core/styles"
import './../../assets/scss/mobileFilter.scss'

const RightFilter = withStyles({
  paper: {
    width: "50%",
    fontFamily: "Poppins",
    "& hr": {
      width: "100%",
      backgroundColor: "#000"
    },
    "& .MuiTypography-body1": {
      fontFamily: "Poppins !important",
      color: "#000 !important",
      fontSize: "0.9rem"
    },
    ["@media (max-height:960px)"]: { width: "80%" },
  }
})(SwipeableDrawer)

class FilterDrawer extends React.Component {
  state = {
    toggleFilterDrawer: false,
    isCategoriesOpen: false,
    isManufacturersOpen: false
  }

  toggleFilterDrawer = () => {
    this.setState({
      toggleFilterDrawer: !this.state.toggleFilterDrawer
    })
  }

  toggleCategories = () => {
    this.setState({
      isCategoriesOpen: !this.state.isCategoriesOpen
    })
  }

  toggleManufacturers = () => {
    this.setState({
      isManufacturersOpen: !this.state.isManufacturersOpen
    })
  }

  filterCategories = (category) => {
    this.props.filterCategories(category)
    this.setState({
      isCategoriesOpen: false
    })
  }

  filterManufacturers = (manufacturer) => {
    this.props.filterManufacturers(manufacturer)
    this.setState({
      isManufacturersOpen: false
    })
  }


  list = () => {
    return (
      <div>
        <div className="w-100">
          <CloseRoundedIcon className="float-right m-3" onClick={() => this.toggleFilterDrawer()}/>
        </div>
        {this.props.categoryOptions ? (
          <React.Fragment>
            <Button color="link" className="d-block w-100 text-left filterCategory pl-3" onClick={this.toggleCategories}>
              Product Type
              {this.state.isCategoriesOpen ? (
                <KeyboardArrowUpRoundedIcon className="float-right"/>
              ) : (
                <KeyboardArrowDownRoundedIcon className="float-right"/>
              )}
            </Button>
            <Collapse isOpen={this.state.isCategoriesOpen}>
              <List>
                {this.props.categoryOptions.map((category, index) => (
                  <ListItem button key={category} onClick={() => this.filterCategories(category)}>
                    <ListItemText primary={category} onClick={this.toggleFilterDrawer}/>
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <Divider/>
          </React.Fragment>
        ) : (
          null
        )}
        {this.props.manufacturerOptions ? (
          <React.Fragment>
            <Button color="link" className="d-block w-100 text-left filterCategory pl-3" onClick={this.toggleManufacturers}>
              Manufacturer
              {this.state.isManufacturersOpen ? (
                <KeyboardArrowUpRoundedIcon className="float-right"/>
              ) : (
                <KeyboardArrowDownRoundedIcon className="float-right"/>
              )}
            </Button>
            <Collapse isOpen={this.state.isManufacturersOpen}>
              <List>
                {this.props.manufacturerOptions.map((manufacturer, index) => (
                  <ListItem button key={manufacturer} onClick={() => this.filterManufacturers(manufacturer)}>
                    <ListItemText primary={manufacturer} onClick={this.toggleFilterDrawer}/>
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <Divider/>
          </React.Fragment>
        ) : (
          null
        )}
      </div>
    )
  }

  render() {
    console.log(this.state.toggleFilterDrawer)
    return (
      <React.Fragment>
        <div>
          <FilterListRoundedIcon
            className="float-right"
            onClick={this.toggleFilterDrawer}
          />
          {this.state.toggleFilterDrawer ? (
            <RightFilter
              anchor="right"
              open={this.state.toggleFilterDrawer}
              onClose={this.toggleFilterDrawer}
              onOpen={this.toggleFilterDrawer}
            >
              {this.list()}
            </RightFilter>
          ) : (
            null
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default FilterDrawer;