import React from 'react'
import { Card, CardBody, CardTitle, Col } from 'reactstrap'
import TableFertilizantes from '../components/Fertilizantes/TableFertilizantes'

const Fertilizantes = () => {
  return (
    <Col md='12' lg='12'>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Fertilizantes :
          </CardTitle>
          <TableFertilizantes />
        </CardBody>
      </Card>
    </Col>

  )
}

export default Fertilizantes