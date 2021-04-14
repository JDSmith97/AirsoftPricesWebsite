import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  ButtonDropdown,
  DropdownToggle,
} from "reactstrap"

import FilterDrawer from "./../../Menu/Filter"

const generateRow = (maxRows) => {
  let row = 0
  const rows = []
  while (row < maxRows) {
    rows.push(
      <Row key={row}>
        <Col sm='12' md='6' lg='4' key={`${row} loader1`}>
          <Card className='py-3 card-deals-loading'>
            <CardHeader>
              <div className='card-image-deals-loading rounded' />
            </CardHeader>
            <CardBody>
              <div className='card-title-deals-loading rounded my-4' />
              <div className='card-price-deals-loading rounded' />
              <div className='card-price-deals-loading rounded' />
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' md='6' lg='4' key={`${row} loader2`}>
          <Card className='py-3 card-deals-loading'>
            <CardHeader>
              <div className='card-image-deals-loading rounded' />
            </CardHeader>
            <CardBody>
              <div className='card-title-deals-loading rounded my-4' />
              <div className='card-price-deals-loading rounded' />
              <div className='card-price-deals-loading rounded' />
            </CardBody>
          </Card>
        </Col>
        <Col sm='12' md='6' lg='4' key={`${row} loader3`}>
          <Card className='py-3 card-deals-loading'>
            <CardHeader>
              <div className='card-image-deals-loading rounded' />
            </CardHeader>
            <CardBody>
              <div className='card-title-deals-loading rounded my-4' />
              <div className='card-price-deals-loading rounded' />
              <div className='card-price-deals-loading rounded' />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
    row++
  }
  return rows
}

const loader = (input) => {
  return (
    <div className='section' data-background-color='black'>
      <Container className='text-center'>
        {input.isItemsPage ? (
          <div>
            <div className='space-50' />
            <Row>
              <div className='w-100 px-3'>
                <Row>
                  <Col className='d-none d-lg-block d-xl-block'>
                    <div className='border-primary mb-4 float-left'>
                      {input.manufacturer ? (
                        <ButtonDropdown>
                          <div className='dropdown-content'>
                            <DropdownToggle caret className='px-3' color='info'>
                              Product Type
                            </DropdownToggle>
                          </div>
                        </ButtonDropdown>
                      ) : (
                        null
                      )}
                      {input.category ? (
                        <ButtonDropdown className='ml-3'>
                          <div className='dropdown-content'>
                            <DropdownToggle caret className='px-3' color='info'>
                              Manufacturer
                            </DropdownToggle>
                          </div>
                        </ButtonDropdown>
                      ) : (
                        null
                      )}
                    </div>
                  </Col>
                  <Col>
                    <Row className='mb-4'>
                      <Col
                        xs='2'
                        md='2'
                        className='d-block d-sm-block d-md-block d-lg-none'
                      >
                        <div className='w-100 border-primary float-left'>
                          <FilterDrawer />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
        ) : (
          null
        )}
        {generateRow(input.maxRows)}
      </Container>
    </div>
  )
}

export default loader
