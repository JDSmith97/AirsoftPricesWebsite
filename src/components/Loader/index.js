import React from "react"
import Loader from "react-loader-spinner"

import { Row, Card, Col, CardBody } from "reactstrap"

const loader = () => {
  return (
    <Row className='vh-100 position-relative items-page d-flex justify-content-center'>
      <div className='d-flex align-items-center'>
        <Col className='ml-auto mr-auto' lg='12' md='12' sm='12' xs='12'>
          <Card className=''>
            <CardBody>
              <div className='d-flex justify-content-center'>
                <Loader
                  type='TailSpin'
                  color='#00BFFF'
                  height={80}
                  width={80}
                />
              </div>
              <h3>Loading...</h3>
            </CardBody>
          </Card>
        </Col>
      </div>
    </Row>
  )
}

export default loader
