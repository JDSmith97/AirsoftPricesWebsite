import React from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap"


const loader = (input) => {
  return (
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
        <Card className='my-5 card-item-loading'>
          <CardHeader>
            <div className='card-image-deals-loading rounded' />
          </CardHeader>
          <CardBody>
              <div className='card-title-deals-loading rounded my-4' />
              <div className='card-price-deals-table-loading rounded' />
            </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default loader
