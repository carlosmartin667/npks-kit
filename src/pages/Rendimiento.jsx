import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// ** import wizard
import WizardRendimiento from "./WizardRendimiento";

// ** page of results
import ApexCharts from "../components/Graficos/charts/apex";

const Rendimiento = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [modal, setModal] = useState(false);
  const toggleTwo = () => setModal(!modal);

  return (
    <>
      {/* <Col>
      <ApexCharts />
    </Col> */}

      <Card>
        <CardHeader>
          <CardTitle className="fs-2 fw-bolder mb-1">
            Recomendación nutricional:
          </CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex align-items-center justify-content-between flex-sm-column flex-md-row p-sm-2 p-md-5">
            <div>
              <Row>
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">N</span>{" "}
                  <CardText className="fs-4">
                    Urea: Unidad <span className="fw-bolder">40 kg/ha</span>
                  </CardText>
                </div>
              </Row>

              <Row className="my-1">
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">P</span>{" "}
                  <CardText className="fs-4">
                    SPS Superfosfato simple de Ca: Unidad{" "}
                    <span className="fw-bolder">40 kg/ha</span>
                  </CardText>
                </div>
              </Row>

              <Row className="my-1">
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">K</span>{" "}
                  <CardText className="fs-4">
                    Cloruro de potasio: Unidad{" "}
                    <span className="fw-bolder">40 kg/ha</span>
                  </CardText>
                </div>
              </Row>

              <Row>
                <div className="d-flex align-items-center gap-1">
                  <span className="fs-1 fw-bolder text-primary">S</span>{" "}
                  <CardText className="fs-4">
                    Yeso: Unidad <span className="fw-bolder">40 kg/ha</span>
                  </CardText>
                </div>
              </Row>
            </div>

            <div className="d-flex flex-sm-row flex-md-column align-items-center justify-content-center gap-sm-1 gap-md-3 mt-sm-3">
              <Button color="primary" block>
                Fertilizantes
              </Button>
              {/* <Button color="primary" block>
                Disponibilidad de agua
              </Button> */}
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="primary" caret size="md">
                  Disponibilidad de agua
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem header>Header</DropdownItem> */}
                  <DropdownItem className="w-100">Año húmedo</DropdownItem>
                  <DropdownItem className="w-100">Año neutro</DropdownItem>
                  <DropdownItem className="w-100">Año seco</DropdownItem>
                  <DropdownItem className="w-100">Riego</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Button color="primary" block onClick={toggleTwo}>
                Fecha de siembra
              </Button>

              <div className="w-100">
                <Label>Fecha de siembra</Label>
                <Input type="date" />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Row>
        <Col sm="12">
          <WizardRendimiento />
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggleTwo}>
        <ModalHeader toggle={toggleTwo}>
          Modifica tu fecha de siembra.
        </ModalHeader>
        <ModalBody>
          <Label>Fecha de siembra</Label>
          <Input type="date" />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleTwo}>
            Cancelar
          </Button>{" "}
          <Button color="primary" onClick={toggleTwo}>
            Guardar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Rendimiento;
