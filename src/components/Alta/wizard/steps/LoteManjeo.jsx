// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button, FormGroup } from 'reactstrap'

const LoteManjeo = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h3 className='mb-0'>Lote y Manjeo (Modificar página jira)</h3>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <FormGroup >
        <Row className='match-height mt-1'>
            <Col md='6' sm='12' >
              <Label className='mt-1'>Nombre</Label>
              <Input placeholder='Nombre' />
              <Label className='mt-1'>Localidad</Label>
              <Input placeholder='Localidad' />
              <Label className='mt-1'>Tiempo transcurrido entre cosecha y siembra</Label>
              <Input placeholder='Tiempo' />
              <Label className='mt-1'>Rendimiento del cultivo antecesor en qq/ha</Label>
              <Input placeholder='Rendimiento del cultivo antecesor en qq/ha' />
            </Col>
            <Col md='6' sm='12'>
              <Label className='mt-1'>Campo o establecimiento</Label>
              <Input placeholder='establecimiento' />
              <Label className='mt-1'>Cultivo antecesor</Label>
              <Input placeholder='Cultivo antecesor' />
              <Label className='mt-1'>¿Se realiza siembra directa o lote arado?</Label>
              <Input placeholder='¿Se realiza siembra directa o lote arado?' />
              <Label className='mt-1'>Cantidad de hectáreas</Label>
              <Input placeholder='Cantidad de hectáreas' />
            </Col>
        </Row>
        </FormGroup>
        <div className='d-flex justify-content-end'>
          {/* <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Atras</span>
          </Button> */}
          <Link to="/home" className="btn btn-primary">
            <span className='align-middle d-sm-inline-block d-none'>Guardar</span>
            {/* <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight> */}
          </Link>
        </div>
      </Form>
    </Fragment>
  )
}

export default LoteManjeo
