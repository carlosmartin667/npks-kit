// ** React Imports
import { Fragment } from 'react'

import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button, Card, CardBody } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Suelo = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>Suelo</h3>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Card>
          <CardBody>
            <h3>Suelo</h3>
            <Row className='match-height mt-1'>
              <Col md='6' sm='12'>
                <Label className='mt-1'>
                  Nivel de compactación</Label>
                <Input placeholder='Nivel de compactación' />
                <Label className='mt-1'>Limitación por anegamiento</Label>
                <Input placeholder='Limitación por anegamiento' />
              </Col>
              <Col md='6' sm='12'>
                <Label className='mt-1'>Análisis de suelo</Label>
                <Input placeholder='Análisis de suelo' />
                <Label className='mt-1'>Profundidad enraizable</Label>
                <Input placeholder='Profundidad enraizable' />
              </Col>
            </Row>
          </CardBody >
        </Card >
        <Card >
          <CardBody>
            <h3>Nuevo Estrado</h3>
            <Row className='match-height mt-1'>
              <Col md='4' sm='12'>
                <Label className='mt-1'>
                  Estrado</Label>
                <Input placeholder='Estrado' />
                <Label className='mt-1'>Profundidad (cm)</Label>
                <Input placeholder='Profundidad (cm)' />
                <Label className='mt-1'>Densidad Suelo</Label>
                <Input placeholder='Densidad Suelo' />
                <Label className='mt-1'>N-NO3
                </Label>
                <Input placeholder='N-NO3' />
                <Label className='mt-1'>S-SO4
                </Label>
                <Input placeholder='S-SO4' />
              </Col>
              <Col md='4' sm='12'>
                <Label className='mt-1'>
                  N total</Label>
                <Input placeholder='N total' />
                <Label className='mt-1'>Fmin</Label>
                <Input placeholder='Fmin' />
                <Label className='mt-1'>P</Label>
                <Input placeholder='P' />
                <Label className='mt-1'>CE</Label>
                <Input placeholder='CE' />
                <Label className='mt-1'>
                  PH
                </Label>
                <Input placeholder='PH' />
              </Col>
              <Col md='4' sm='12'>
                <Label className='mt-1'>CIC</Label>
                <Input placeholder='CIC' />
                <Label className='mt-1'>Cai
                </Label>
                <Input placeholder='Cai' />
                <Label className='mt-1'>Mgi</Label>
                <Input placeholder='Mgi' />
                <Label className='mt-1'>Nai</Label>
                <Input placeholder='Nai' />
                <Label className='mt-1'>Ki
                </Label>
                <Input placeholder='Ki' />
              </Col>
            </Row>
          </CardBody >
        </Card >
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Atras</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Siguiente</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Suelo
