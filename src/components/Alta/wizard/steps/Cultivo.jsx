// ** React Imports
import { Fragment } from "react";

// ** Icons Imports
import { ArrowLeft, ArrowRight } from "react-feather";

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Input,
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Cultivo = ({ stepper }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Cultivo</CardTitle>
        </CardHeader>

        <CardBody>
          <Form>
            <Row>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="register-select">
                  Cultivo a fertilizar
                </Label>
                <Input type="select" name="options" id="register-select">
                  <option value={"Alfalfa"}>Alfalfa</option>
                  <option value={"Algodón"}>Algodón</option>
                  <option value={"Arroz"}>Arroz</option>
                  <option value={"Maíz"}>Maíz</option>
                  <option value={"Otro"}>Otro</option>
                </Input>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="lastNameMulti">
                  Rendimiento objetivo
                </Label>
                <Input
                  type="number"
                  name="lastname"
                  id="lastNameMulti"
                  placeholder="90"
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="cityMulti">
                  Fecha de siembra
                </Label>
                <Input
                  type="date"
                  name="city"
                  id="cityMulti"
                  placeholder="8/03/2022"
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="cityMulti">
                  Precio del producto en U$S/tn
                </Label>
                <Input
                  type="number"
                  name="city"
                  id="cityMulti"
                  placeholder="1"
                />
              </Col>

              <span className="mt-5"></span>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="predecessorCrop">
                  Cultivo antecesor
                </Label>
                <Input type="select" id="register-select">
                  <option value={"Alfalfa"}>Alfalfa</option>
                  <option value={"Algodón"}>Algodón</option>
                  <option value={"Arroz"}>Arroz</option>
                  <option selected value={"Maíz"}>
                    Maíz
                  </option>
                  <option value={"Otro"}>Otro</option>
                </Input>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="cropYield">
                  Rendimiento del cultivo antecesor en qq/ha
                </Label>
                <Input
                  type="number"
                  name="elapsedTime"
                  id="elapsedTime"
                  placeholder="90"
                />
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="elapsedTime">
                  Tiempo transcurrido entre cosecha y siembra
                </Label>

                <Input type="select" id="register-select">
                  <option selected value={"Menos de 2 meses"}>
                    Menos de 2 meses
                  </option>
                  <option value={"De 2 a 4 meses"}>De 2 a 4 meses</option>
                  <option value={"Mas de 4 meses"}>Mas de 4 meses</option>
                </Input>
              </Col>

              <Col md="6" sm="12" className="mt-2">
                <div className="form-check form-switch">
                  <Label className="form-label me-2 fs-5" for="performSowing">
                    Realiza siembra directa
                  </Label>
                  <Input
                    type="checkbox"
                    role="switch"
                    name="performSowing"
                    id="performSowing"
                    placeholder="Realiza siembra directa"
                    class="form-check-input"
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>

        <CardFooter>
          <div className="d-flex justify-content-between mt-1">
            <Button
              color="primary"
              className="btn-prev"
              onClick={() => stepper.previous()}
            >
              <ArrowLeft
                size={14}
                className="align-middle me-sm-25 me-0"
              ></ArrowLeft>
              <span className="align-middle d-sm-inline-block d-none">
                Atras
              </span>
            </Button>

            <Button
              color="primary"
              className="btn-next"
              onClick={() => stepper.next()}
            >
              <span className="align-middle d-sm-inline-block d-none">
                Siguiente
              </span>
              <ArrowRight
                size={14}
                className="align-middle ms-sm-25 ms-0"
              ></ArrowRight>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Cultivo;

// const Cultivo = ({ stepper }) => {
//   return (
//     <>
//       <div className='content-header'>
//         <h3 className='mb-0'>Cultivo</h3>
//       </div>
//       <Form onSubmit={e => e.preventDefault()}>
//         <Row className='match-height mt-1'>
//           <Col md='6' sm='12' >
//             <Label className='mt-1'>Cultivo a fertilizar</Label>
//             <Input placeholder='Cultivo a fertilizar' />
//             <Label className='mt-1'>Rendimiento objetivo</Label>
//             <Input placeholder='Rendimiento objetivo' />
//             <Label className='mt-1'>Fecha de siembra</Label>
//             <Input placeholder='Fecha de siembra' />
//           </Col>
//           <Col md='6' sm='12'>
//             <Label className='mt-1'>Precio del producto en U$S/tn</Label>
//             <Input placeholder='Precio del producto en U$S/tn' />
//             <Label>Contenido de humedad</Label>
//             <Input placeholder='Contenido de humedad' />
//           </Col>
//         </Row>
//         <div className='d-flex justify-content-between mt-1'>
//           <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
//             <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
//             <span className='align-middle d-sm-inline-block d-none'>Atras</span>
//           </Button>
//           <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
//             <span className='align-middle d-sm-inline-block d-none'>Siguiente</span>
//             <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
//           </Button>
//         </div>
//       </Form>
//     </>
//   )
// }

// export default Cultivo
