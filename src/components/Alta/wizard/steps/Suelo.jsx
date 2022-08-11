// ** React Imports
import { useContext, useState, useEffect } from "react";

import { ArrowLeft, ArrowRight } from "react-feather";

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
  UncontrolledTooltip,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledAlert,
  Alert,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";

// ** import ions from react-icons
import { FiHelpCircle } from "react-icons/fi";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

// ** import DataContext

const Suelo = ({ stepper }) => {
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [estratoDos, setEstratoDos] = useState(false);
  const [estratoTres, setEstratoTres] = useState(false);

  const [profundidadEstratoDos, setProfundidadEstratoDos] = useState("20 a 40");

  const [modalEstratoDos, setModalEstratoDos] = useState(false);
  const [modalEstratoTres, setModalEstratoTres] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Suelo</CardTitle>
        </CardHeader>

        <CardBody>
          <Form>
            <Row>
              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="register-select">
                  Nivel de compactación
                </Label>
                <Input type="select" name="options" id="register-select">
                  <option value={"Mullido"}>Mullido</option>
                  <option value={"Normal"}>Normal</option>
                  <option selected value={"Compacto"}>
                    Compacto
                  </option>
                  <option value={"Muy compacto"}>Muy compacto</option>
                </Input>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="register-select">
                  Limitación por anegamiento
                </Label>
                <Input type="select" name="options" id="register-select">
                  <option value={"Suelo imperfectamente drenado o peor"}>
                    Suelo imperfectamente drenado o peor
                  </option>
                  <option selected value={"Suelo moderadamente bien drenado"}>
                    Suelo moderadamente bien drenado
                  </option>
                  <option value={"Suelo bien drenado o mejor"}>
                    Suelo bien drenado o mejor
                  </option>
                </Input>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="cityMulti">
                  Profunidad enraizable (cm)
                </Label>
                <Input
                  type="number"
                  max={"35"}
                  min={"0"}
                  name="city"
                  id="cityMulti"
                  placeholder="35"
                />
              </Col>
            </Row>

            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1" className="fs-3">
                  Estrato 1
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <Row>
                    {/* <CardSubtitle className="fs-4 mb-2 mt-2">
                      Estrato 1
                    </CardSubtitle> */}

                    <Col md="4" sm="12">
                      {/* Profundidad (cm) */}
                      <Label className="mt-1" for="register-select">
                        Profundidad (cm)
                      </Label>
                      <Input type="select" name="options" id="register-select">
                        <option value={"0 a 20"}>0 a 20</option>
                      </Input>

                      {/* S-SO4  */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        S-SO4 <FiHelpCircle id="S-SO4" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="8" />

                      <UncontrolledTooltip placement="right" target="S-SO4">
                        <span className="fw-bolder">S-SO4 </span> Azufre de
                        sulfatos expresado en ppm <br />{" "}
                        <span className="fw-bolder">Unidad</span>: ppm
                      </UncontrolledTooltip>

                      {/* P */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        P <FiHelpCircle id="Fosforo" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="14" />

                      <UncontrolledTooltip placement="right" target="Fosforo">
                        <span className="fw-bolder">P</span> Fosforo extraíble.
                        Técnica Bray y Kurtz Nº1 <br />{" "}
                        <span className="fw-bolder">Unidad</span>: ppm o mg/kg
                      </UncontrolledTooltip>

                      {/* CIC */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="14" />

                      <UncontrolledTooltip placement="right" target="CIC">
                        <span className="fw-bolder">CIC</span> Capacidad de
                        intercambio catiónico <br />{" "}
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>

                      {/* Nai */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="0.3" />

                      <UncontrolledTooltip placement="right" target="Nai">
                        <span className="fw-bolder">Nai</span> Sodio
                        intercambiable <br />{" "}
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>
                    </Col>

                    <Col md="4" sm="12">
                      {/* Densidad del suelo */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        Densidad del suelo{" "}
                        <FiHelpCircle
                          id="densidadDelSuelo"
                          className="fs-5 me-1"
                        />
                      </Label>
                      <Input type="number" placeholder="1.35" />

                      <UncontrolledTooltip
                        placement="right"
                        target="densidadDelSuelo"
                      >
                        <span className="fw-bolder">Densidad del suelo</span>{" "}
                        Densidad del estrato <br />{" "}
                        <span className="fw-bolder">Unidades</span>: gr/cm3
                      </UncontrolledTooltip>

                      {/* N total */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        N total{" "}
                        <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="0.12" />

                      <UncontrolledTooltip placement="right" target="nTotal">
                        <span className="fw-bolder">Nitrógeno total</span>{" "}
                        Método de Kjeldahl. Ingresar gr, % o ppm <br />
                        <span className="fw-bolder">Unidades</span>: %, mg/kg o
                        ppm (tengo que corroborar con Miguel)
                      </UncontrolledTooltip>

                      {/* CE */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="0.5" />

                      <UncontrolledTooltip placement="right" target="CE">
                        <span className="fw-bolder">CE</span> Conductividad
                        eléctrica del extracto de saturación <br />
                        <span className="fw-bolder">Unidad</span>: dS/m
                      </UncontrolledTooltip>

                      {/* Cai */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="9" />

                      <UncontrolledTooltip placement="right" target="Cai">
                        <span className="fw-bolder">Cai</span> Calcio
                        intercambiable <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>
                      {/* Ki */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="2" />

                      <UncontrolledTooltip placement="right" target="Ki">
                        <span className="fw-bolder">Ki</span> Potasio
                        intercambiable <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>
                    </Col>

                    <Col md="4" sm="12">
                      {/* N-NO3 */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        N-NO3 <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="15" />

                      <UncontrolledTooltip placement="right" target="N-NO3">
                        <span className="fw-bolder">N-NO3</span> N de Nitratos a
                        la siembra expresado en ppm <br />
                        <span className="fw-bolder">Unidades</span>: mg/kg o ppm
                      </UncontrolledTooltip>

                      {/* Fmin */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        Fmin <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="0.11" />

                      <UncontrolledTooltip placement="right" target="Fmin">
                        <span className="fw-bolder">Fmin</span> Factor de
                        mineralización. Fracción del N total que es
                        potencialmente mineralizable. Los valores frecuentes van
                        de 0.07 a 0.12 y varían según el manejo del lote. Suelos
                        agotados o imperfectamente drenados corresponden a
                        valores mas bajos de Fmin.
                      </UncontrolledTooltip>

                      {/* PH */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="6.7" />

                      <UncontrolledTooltip placement="right" target="PH">
                        <span className="fw-bolder">PH</span> Reacción del
                        suelo. Relación suelo agua 1:2.5
                      </UncontrolledTooltip>

                      {/* Mgi */}
                      <Label className="mt-1 d-flex align-items-center justify-content-between">
                        Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                      </Label>
                      <Input type="number" placeholder="1.2" />

                      <UncontrolledTooltip placement="right" target="Mgi">
                        <span className="fw-bolder">Mgi</span> Magnesio
                        intercambiable. <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>

                      {/* <Label className="mt-1">
                        ¿Desea añadir otro estrato?
                      </Label>
                      <Button color="primary" outline block>
                        Agregar estrato +
                      </Button> */}
                    </Col>
                  </Row>
                </AccordionBody>
              </AccordionItem>

              {!estratoDos ? (
                <Button
                  color="primary"
                  outline
                  block
                  onClick={(e) => {
                    e.preventDefault(), setEstratoDos(true);
                  }}
                >
                  Agregar estrato +
                </Button>
              ) : null}

              {estratoDos ? (
                <>
                  <AccordionItem>
                    <AccordionHeader targetId="2" className="fs-3">
                      Estrato 2
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                      <Row>
                        {/* <CardSubtitle className="fs-4 mb-2 mt-4">
                      Estrato 2
                    </CardSubtitle> */}

                        <Col md="4" sm="12">
                          {/* Profundidad (cm) */}
                          <Label className="mt-1" for="register-select">
                            Profundidad (cm)
                          </Label>
                          <Input
                            type="select"
                            name="options"
                            id="register-select"
                            onChange={(e) => {
                              e.preventDefault();
                              let selectedValue = e.target.value;
                              setProfundidadEstratoDos(selectedValue);
                            }}
                          >
                            <option value={"20 a 40"}>20 a 40</option>
                            {estratoTres !== false ? null : (
                              <option value={"20 a 60"}>20 a 60</option>
                            )}
                          </Input>

                          {/* S-SO4  */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            S-SO4{" "}
                            <FiHelpCircle id="S-SO4" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="8" />

                          <UncontrolledTooltip placement="right" target="S-SO4">
                            <span className="fw-bolder">S-SO4 </span> Azufre de
                            sulfatos expresado en ppm <br />{" "}
                            <span className="fw-bolder">Unidad</span>: ppm
                          </UncontrolledTooltip>

                          {/* P */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            P{" "}
                            <FiHelpCircle id="Fosforo" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="14" />

                          <UncontrolledTooltip
                            placement="right"
                            target="Fosforo"
                          >
                            <span className="fw-bolder">P</span> Fosforo
                            extraíble. Técnica Bray y Kurtz Nº1 <br />{" "}
                            <span className="fw-bolder">Unidad</span>: ppm o
                            mg/kg
                          </UncontrolledTooltip>

                          {/* CIC */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="14" />

                          <UncontrolledTooltip placement="right" target="CIC">
                            <span className="fw-bolder">CIC</span> Capacidad de
                            intercambio catiónico <br />{" "}
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>

                          {/* Nai */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="0.3" />

                          <UncontrolledTooltip placement="right" target="Nai">
                            <span className="fw-bolder">Nai</span> Sodio
                            intercambiable <br />{" "}
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>
                        </Col>

                        <Col md="4" sm="12">
                          {/* Densidad del suelo */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            Densidad del suelo{" "}
                            <FiHelpCircle
                              id="densidadDelSuelo"
                              className="fs-5 me-1"
                            />
                          </Label>
                          <Input type="number" placeholder="1.35" />

                          <UncontrolledTooltip
                            placement="right"
                            target="densidadDelSuelo"
                          >
                            <span className="fw-bolder">
                              Densidad del suelo
                            </span>{" "}
                            Densidad del estrato <br />{" "}
                            <span className="fw-bolder">Unidades</span>: gr/cm3
                          </UncontrolledTooltip>

                          {/* N total */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            N total{" "}
                            <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="0.12" />

                          <UncontrolledTooltip
                            placement="right"
                            target="nTotal"
                          >
                            <span className="fw-bolder">Nitrógeno total</span>{" "}
                            Método de Kjeldahl. Ingresar gr, % o ppm <br />
                            <span className="fw-bolder">Unidades</span>: %,
                            mg/kg o ppm (tengo que corroborar con Miguel)
                          </UncontrolledTooltip>

                          {/* CE */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="0.5" />

                          <UncontrolledTooltip placement="right" target="CE">
                            <span className="fw-bolder">CE</span> Conductividad
                            eléctrica del extracto de saturación <br />
                            <span className="fw-bolder">Unidad</span>: dS/m
                          </UncontrolledTooltip>

                          {/* Cai */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="9" />

                          <UncontrolledTooltip placement="right" target="Cai">
                            <span className="fw-bolder">Cai</span> Calcio
                            intercambiable <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>
                          {/* Ki */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="2" />

                          <UncontrolledTooltip placement="right" target="Ki">
                            <span className="fw-bolder">Ki</span> Potasio
                            intercambiable <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>
                        </Col>

                        <Col md="4" sm="12">
                          {/* N-NO3 */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            N-NO3{" "}
                            <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="15" />

                          <UncontrolledTooltip placement="right" target="N-NO3">
                            <span className="fw-bolder">N-NO3</span> N de
                            Nitratos a la siembra expresado en ppm <br />
                            <span className="fw-bolder">Unidades</span>: mg/kg o
                            ppm
                          </UncontrolledTooltip>

                          {/* Fmin */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            Fmin{" "}
                            <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="0.11" />

                          <UncontrolledTooltip placement="right" target="Fmin">
                            <span className="fw-bolder">Fmin</span> Factor de
                            mineralización. Fracción del N total que es
                            potencialmente mineralizable. Los valores frecuentes
                            van de 0.07 a 0.12 y varían según el manejo del
                            lote. Suelos agotados o imperfectamente drenados
                            corresponden a valores mas bajos de Fmin.
                          </UncontrolledTooltip>

                          {/* PH */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="6.7" />

                          <UncontrolledTooltip placement="right" target="PH">
                            <span className="fw-bolder">PH</span> Reacción del
                            suelo. Relación suelo agua 1:2.5
                          </UncontrolledTooltip>

                          {/* Mgi */}
                          <Label className="mt-1 d-flex align-items-center justify-content-between">
                            Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                          </Label>
                          <Input type="number" placeholder="1.2" />

                          <UncontrolledTooltip placement="right" target="Mgi">
                            <span className="fw-bolder">Mgi</span> Magnesio
                            intercambiable. <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>

                          {/* <Label className="mt-1">
                        ¿Desea añadir otro estrato?
                      </Label>
                      <Button color="primary" outline block>
                        Agregar estrato +
                      </Button> */}

                          <Label className="mt-1">Eliminar estrato</Label>
                          <Button
                            color="danger"
                            outline
                            block
                            onClick={(e) => {
                              e.preventDefault(),
                                setModalEstratoDos(!modalEstratoDos);
                            }}
                          >
                            Eliminar
                          </Button>
                        </Col>
                      </Row>
                    </AccordionBody>
                  </AccordionItem>

                  {profundidadEstratoDos === "20 a 40" ? (
                    <>
                      {!estratoTres ? (
                        <Button
                          color="primary"
                          outline
                          block
                          onClick={(e) => {
                            e.preventDefault(), setEstratoTres(true);
                          }}
                        >
                          Agregar estrato +
                        </Button>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}

              {estratoTres ? (
                <AccordionItem>
                  <AccordionHeader targetId="3" className="fs-3">
                    Estrato 3
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <Row>
                      {/* <CardSubtitle className="fs-4 mb-2 mt-4">
                      Estrato 3
                    </CardSubtitle> */}

                      <Col md="4" sm="12">
                        {/* Profundidad (cm) */}
                        <Label className="mt-1" for="register-select">
                          Profundidad (cm)
                        </Label>
                        <Input
                          type="select"
                          name="options"
                          id="register-select"
                        >
                          <option value={"40 a 60"}>40 a 60</option>
                        </Input>

                        {/* S-SO4  */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          S-SO4{" "}
                          <FiHelpCircle id="S-SO4" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="8" />

                        <UncontrolledTooltip placement="right" target="S-SO4">
                          <span className="fw-bolder">S-SO4 </span> Azufre de
                          sulfatos expresado en ppm <br />{" "}
                          <span className="fw-bolder">Unidad</span>: ppm
                        </UncontrolledTooltip>

                        {/* P */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          P <FiHelpCircle id="Fosforo" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="14" />

                        <UncontrolledTooltip placement="right" target="Fosforo">
                          <span className="fw-bolder">P</span> Fosforo
                          extraíble. Técnica Bray y Kurtz Nº1 <br />{" "}
                          <span className="fw-bolder">Unidad</span>: ppm o mg/kg
                        </UncontrolledTooltip>

                        {/* CIC */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="14" />

                        <UncontrolledTooltip placement="right" target="CIC">
                          <span className="fw-bolder">CIC</span> Capacidad de
                          intercambio catiónico <br />{" "}
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>

                        {/* Nai */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="0.3" />

                        <UncontrolledTooltip placement="right" target="Nai">
                          <span className="fw-bolder">Nai</span> Sodio
                          intercambiable <br />{" "}
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>
                      </Col>

                      <Col md="4" sm="12">
                        {/* Densidad del suelo */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          Densidad del suelo{" "}
                          <FiHelpCircle
                            id="densidadDelSuelo"
                            className="fs-5 me-1"
                          />
                        </Label>
                        <Input type="number" placeholder="1.35" />

                        <UncontrolledTooltip
                          placement="right"
                          target="densidadDelSuelo"
                        >
                          <span className="fw-bolder">Densidad del suelo</span>{" "}
                          Densidad del estrato <br />{" "}
                          <span className="fw-bolder">Unidades</span>: gr/cm3
                        </UncontrolledTooltip>

                        {/* N total */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          N total{" "}
                          <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="0.12" />

                        <UncontrolledTooltip placement="right" target="nTotal">
                          <span className="fw-bolder">Nitrógeno total</span>{" "}
                          Método de Kjeldahl. Ingresar gr, % o ppm <br />
                          <span className="fw-bolder">Unidades</span>: %, mg/kg
                          o ppm (tengo que corroborar con Miguel)
                        </UncontrolledTooltip>

                        {/* CE */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="0.5" />

                        <UncontrolledTooltip placement="right" target="CE">
                          <span className="fw-bolder">CE</span> Conductividad
                          eléctrica del extracto de saturación <br />
                          <span className="fw-bolder">Unidad</span>: dS/m
                        </UncontrolledTooltip>

                        {/* Cai */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="9" />

                        <UncontrolledTooltip placement="right" target="Cai">
                          <span className="fw-bolder">Cai</span> Calcio
                          intercambiable <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>
                        {/* Ki */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="2" />

                        <UncontrolledTooltip placement="right" target="Ki">
                          <span className="fw-bolder">Ki</span> Potasio
                          intercambiable <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>
                      </Col>

                      <Col md="4" sm="12">
                        {/* N-NO3 */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          N-NO3{" "}
                          <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="15" />

                        <UncontrolledTooltip placement="right" target="N-NO3">
                          <span className="fw-bolder">N-NO3</span> N de Nitratos
                          a la siembra expresado en ppm <br />
                          <span className="fw-bolder">Unidades</span>: mg/kg o
                          ppm
                        </UncontrolledTooltip>

                        {/* Fmin */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          Fmin <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="0.11" />

                        <UncontrolledTooltip placement="right" target="Fmin">
                          <span className="fw-bolder">Fmin</span> Factor de
                          mineralización. Fracción del N total que es
                          potencialmente mineralizable. Los valores frecuentes
                          van de 0.07 a 0.12 y varían según el manejo del lote.
                          Suelos agotados o imperfectamente drenados
                          corresponden a valores mas bajos de Fmin.
                        </UncontrolledTooltip>

                        {/* PH */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="6.7" />

                        <UncontrolledTooltip placement="right" target="PH">
                          <span className="fw-bolder">PH</span> Reacción del
                          suelo. Relación suelo agua 1:2.5
                        </UncontrolledTooltip>

                        {/* Mgi */}
                        <Label className="mt-1 d-flex align-items-center justify-content-between">
                          Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                        </Label>
                        <Input type="number" placeholder="1.2" />

                        <UncontrolledTooltip placement="right" target="Mgi">
                          <span className="fw-bolder">Mgi</span> Magnesio
                          intercambiable. <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>

                        {/* <Label className="mt-1">
                        Ya no puede añadir más Estratos
                      </Label>
                      <Button color="primary" outline block disabled>
                        Agregar estrato +
                      </Button> */}

                        <Label className="mt-1">Eliminar estrato</Label>
                        <Button
                          color="danger"
                          outline
                          block
                          onClick={(e) => {
                            e.preventDefault(),
                              setModalEstratoTres(!modalEstratoTres);
                          }}
                        >
                          Eliminar
                        </Button>
                      </Col>
                    </Row>
                  </AccordionBody>
                </AccordionItem>
              ) : null}
            </Accordion>
          </Form>
        </CardBody>

        <CardFooter>
          <div className="d-flex justify-content-end">
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

      {modalEstratoDos ? (
        <Modal
          isOpen={modalEstratoDos}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>¡ATENCIÓN!</ModalHeader>
          <ModalBody>
            <h4>¿Está seguro que desea eliminar el estrato?</h4>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                setModalEstratoDos(!modalEstratoDos);
              }}
            >
              Cancelar
            </Button>

            <Button
              color="danger"
              onClick={() => {
                setEstratoDos(false),
                  setEstratoTres(false),
                  setModalEstratoDos(!modalEstratoDos);
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}

      {modalEstratoTres ? (
        <Modal
          isOpen={modalEstratoTres}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>¡ATENCIÓN!</ModalHeader>
          <ModalBody>
            <h4>¿Está seguro que desea eliminar el estrato?</h4>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                setModalEstratoTres(!modalEstratoTres);
              }}
            >
              Cancelar
            </Button>

            <Button
              color="danger"
              onClick={() => {
                setEstratoTres(false), setModalEstratoTres(!modalEstratoTres);
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}
    </>
  );
};

export default Suelo;
