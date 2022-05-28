// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

const Fertilizante = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>Fertilizantes</h3>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row className='match-height mt-1'>
          <Col md='6' sm='12' >
            <Label className='mt-1'>Cultivo a fertilizar</Label>
            <Input placeholder='Cultivo a fertilizar' />
            <Label className='mt-1'>Rendimiento objetivo</Label>
            <Input placeholder='Rendimiento objetivo' />
            <Label className='mt-1'>Fecha de siembra</Label>
            <Input placeholder='Fecha de siembra' />
          </Col>
          <Col md='6' sm='12'>
            <Label className='mt-1'>Precio del producto en U$S/tn</Label>
            <Input placeholder='Precio del producto en U$S/tn' />
            <Label className='mt-1'>Contenido de humedad</Label>
            <Input placeholder='Contenido de humedad' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between mt-1'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Submit
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Fertilizante
