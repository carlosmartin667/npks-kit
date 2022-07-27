//** import hooks from react
import { useContext } from "react";

// ** Import DataContext from LoteProvider
import { DataContext } from "../../../../utility/context/LoteProvider";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
} from "reactstrap";

const LoteManjeo = () => {
  // ** useContext
  const {
    data,
    setData,
    deleteTask,
    handleSubmit,
    nameLote,
    setNameLote,
    fieldLote,
    setFieldLote,
    locationLote,
    setLocationLote,
    cityLote,
    setCityLote,
    dateLote,
    setDateLote,
    cropLote,
    setCropLote,
    provinceLote,
    setProvinceLote,
  } = useContext(DataContext);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Lote y Manejo</CardTitle>
        </CardHeader>

        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="nameMulti">
                  Nombre
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="nameMulti"
                  placeholder="Nombre"
                  value={nameLote}
                  onChange={(e) => setNameLote(e.target.value)}
                />
              </Col>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="lastNameMulti">
                  Campo o Establecimiento
                </Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastNameMulti"
                  placeholder="Campo o Establecimiento"
                  value={fieldLote}
                  onChange={(e) => setFieldLote(e.target.value)}
                />
              </Col>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="cityMulti">
                  Cantidad de Hectárias
                </Label>
                <Input
                  type="text"
                  name="city"
                  id="cityMulti"
                  placeholder="Cantidad de Hectárias"
                />
              </Col>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="CountryMulti">
                  Localidad
                </Label>
                <Input
                  type="text"
                  name="country"
                  id="CountryMulti"
                  placeholder="Localidad"
                  value={locationLote}
                  onChange={(e) => setLocationLote(e.target.value)}
                />
              </Col>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="CountryMulti">
                  Provincia
                </Label>
                <Input
                  type="text"
                  name="country"
                  id="CountryMulti"
                  placeholder="Localidad"
                  value={provinceLote}
                  onChange={(e) => setProvinceLote(e.target.value)}
                />
              </Col>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="CountryMulti">
                  Pais
                </Label>
                <Input
                  type="text"
                  name="country"
                  id="CountryMulti"
                  placeholder="Localidad"
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label me-2 fs-5" for="CountryMulti">
                  Realiza siembra directa
                </Label>
                <Input
                  type="checkbox"
                  name="country"
                  id="CountryMulti"
                  placeholder="Realiza siembra directa"
                />
              </Col>

              <span className="mb-5"></span>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="CompanyMulti">
                  Cultivo antecesor
                </Label>
                <Input
                  type="text"
                  name="company"
                  id="CompanyMulti"
                  placeholder="Cultivo antecesor"
                />
              </Col>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="EmailMulti">
                  Rendimiento del cultivo antecesor en qq/ha
                </Label>
                <Input
                  type="email"
                  name="Email"
                  id="EmailMulti"
                  placeholder="Rendimiento del cultivo antecesor en qq/ha"
                />
              </Col>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="EmailMulti">
                  Tiempo transcurrido entre cosecha y siembra
                </Label>
                <Input
                  type="email"
                  name="Email"
                  id="EmailMulti"
                  placeholder="Tiempo transcurrido entre cosecha y siembra"
                />
              </Col>
              <Col sm="12">
                <div className="d-flex align-items-center justify-content-end">
                  <Button
                    className="btn btn-primary"
                    color="primary"
                    type="submit"
                  >
                    Guardar
                  </Button>
                  {/* <Button outline color="secondary" type="reset">
                  Reset
                </Button> */}
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
export default LoteManjeo;

// // ** React Imports
// import { Fragment } from 'react'

// // ** Icons Imports
// import { ArrowLeft, ArrowRight } from 'react-feather'
// import { Link } from 'react-router-dom'

// // ** Reactstrap Imports
// import { Label, Row, Col, Input, Form, Button, FormGroup } from 'reactstrap'

// const LoteManjeo = ({ stepper }) => {
//   return (
//     <Fragment>
//       <div className='content-header'>
//         <h3 className='mb-0'>Lote y Manjeo (Modificar página jira)</h3>
//       </div>
//       <Form onSubmit={e => e.preventDefault()}>
//         <FormGroup >
//         <Row className='match-height mt-1'>
//             <Col md='6' sm='12' >
//               <Label className='mt-1'>Nombre</Label>
//               <Input placeholder='Nombre' />
//               <Label className='mt-1'>Localidad</Label>
//               <Input placeholder='Localidad' />
//               <Label className='mt-1'>Tiempo transcurrido entre cosecha y siembra</Label>
//               <Input placeholder='Tiempo' />
//               <Label className='mt-1'>Rendimiento del cultivo antecesor en qq/ha</Label>
//               <Input placeholder='Rendimiento del cultivo antecesor en qq/ha' />
//             </Col>
//             <Col md='6' sm='12'>
//               <Label className='mt-1'>Campo o establecimiento</Label>
//               <Input placeholder='establecimiento' />
//               <Label className='mt-1'>Cultivo antecesor</Label>
//               <Input placeholder='Cultivo antecesor' />
//               <Label className='mt-1'>¿Se realiza siembra directa o lote arado?</Label>
//               <Input placeholder='¿Se realiza siembra directa o lote arado?' />
//               <Label className='mt-1'>Cantidad de hectáreas</Label>
//               <Input placeholder='Cantidad de hectáreas' />
//             </Col>
//         </Row>
//         </FormGroup>
//         <div className='d-flex justify-content-end'>
//           {/* <Button color='secondary' className='btn-prev' outline disabled>
//             <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
//             <span className='align-middle d-sm-inline-block d-none'>Atras</span>
//           </Button> */}
//           <Link to="/home" className="btn btn-primary">
//             <span className='align-middle d-sm-inline-block d-none'>Guardar</span>
//             {/* <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight> */}
//           </Link>
//         </div>
//       </Form>
//     </Fragment>
//   )
// }

// export default LoteManjeo
