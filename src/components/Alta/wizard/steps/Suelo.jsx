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
import { DataContext } from "../../../../utility/context/LoteProvider";

const Suelo = ({ stepper }) => {
  const { backModal, setBackModal, handleChange, dataForm, setDataForm } =
    useContext(DataContext);

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
                <Label className="form-label" for="compactionLevel">
                  Nivel de compactación
                </Label>
                <Input
                  type="select"
                  name="compactionLevel"
                  id="compactionLevel"
                  onChange={handleChange}
                >
                  <option value={"Mullido"}>Mullido</option>
                  <option value={"Normal"}>Normal</option>
                  <option selected value={"Compacto"}>
                    Compacto
                  </option>
                  <option value={"Muy compacto"}>Muy compacto</option>
                </Input>
              </Col>

              <Col md="6" sm="12" className="mb-1">
                <Label className="form-label" for="limitationForWaterlogging">
                  Limitación por anegamiento
                </Label>
                <Input
                  type="select"
                  name="limitationForWaterlogging"
                  id="limitationForWaterlogging"
                  onChange={handleChange}
                >
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
                <Label className="form-label" for="rootableProfunity">
                  Profunidad enraizable (cm)
                </Label>
                <Input
                  type="number"
                  max={"35"}
                  min={"0"}
                  name="rootableProfunity"
                  id="rootableProfunity"
                  placeholder="35"
                  value={dataForm.rootableProfunity}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <CardSubtitle className="fs-4 fw-bold my-2">
              Análisis de suelo
            </CardSubtitle>

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
                      <Label className="mt-1" htmlFor="depth">
                        Profundidad (cm)
                      </Label>
                      <Input
                        type="select"
                        name="depth"
                        id="depth"
                        onChange={handleChange}
                      >
                        <option selected value={" "}>
                          - Seleccione una profundidad -
                        </option>
                        <option value="0 a 20">0 a 20</option>
                      </Input>

                      {/* S-SO4  */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="s-so4"
                      >
                        S-SO4 <FiHelpCircle id="sso4" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="sso4"
                        id="s-so4"
                        placeholder="8"
                        value={dataForm.sso4}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="sso4">
                        <span className="fw-bolder">S-SO4 </span> Azufre de
                        sulfatos expresado en ppm <br />{" "}
                        <span className="fw-bolder">Unidad</span>: ppm
                      </UncontrolledTooltip>

                      {/* P */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="p-hosphate"
                      >
                        P <FiHelpCircle id="phosphate" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="phosphate"
                        id="p-hosphate"
                        placeholder="14"
                        value={dataForm.phosphate}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="phosphate">
                        <span className="fw-bolder">P</span> Fosforo extraíble.
                        Técnica Bray y Kurtz Nº1 <br />{" "}
                        <span className="fw-bolder">Unidades</span>: ppm o mg/kg
                      </UncontrolledTooltip>

                      {/* CIC */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="cic"
                      >
                        CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="cic"
                        id="cic"
                        placeholder="14"
                        value={dataForm.cic}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="CIC">
                        <span className="fw-bolder">CIC</span> Capacidad de
                        intercambio catiónico <br />{" "}
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>

                      {/* Nai */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="nai"
                      >
                        Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="nai"
                        id="nai"
                        placeholder="0.3"
                        value={dataForm.nai}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="Nai">
                        <span className="fw-bolder">Nai</span> Sodio
                        intercambiable <br />{" "}
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>
                    </Col>

                    <Col md="4" sm="12">
                      {/* Densidad del suelo */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="soilDensity"
                      >
                        Densidad del suelo{" "}
                        <FiHelpCircle
                          id="densidadDelSuelo"
                          className="fs-5 me-1"
                        />
                      </Label>
                      <Input
                        type="number"
                        name="soilDensity"
                        id="soilDensity"
                        placeholder="1.35"
                        value={dataForm.soilDensity}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip
                        placement="right"
                        target="densidadDelSuelo"
                      >
                        <span className="fw-bolder">Densidad del suelo</span>{" "}
                        Densidad del estrato <br />{" "}
                        <span className="fw-bolder">Unidad</span>: gr/cm3
                      </UncontrolledTooltip>

                      {/* N total */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="totalN"
                      >
                        N total{" "}
                        <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="totalN"
                        id="totalN"
                        placeholder="0.12"
                        value={dataForm.totalN}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="nTotal">
                        <span className="fw-bolder">Nitrógeno total</span>{" "}
                        Método de Kjeldahl. Ingresar gr, % o ppm <br />
                        <span className="fw-bolder">Unidades</span>: %, mg/kg o
                        ppm (tengo que corroborar con Miguel)
                      </UncontrolledTooltip>

                      {/* CE */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="ce"
                      >
                        CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="ce"
                        id="ce"
                        placeholder="0.5"
                        value={dataForm.ce}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="CE">
                        <span className="fw-bolder">CE</span> Conductividad
                        eléctrica del extracto de saturación <br />
                        <span className="fw-bolder">Unidad</span>: dS/m
                      </UncontrolledTooltip>

                      {/* Cai */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="cai"
                      >
                        Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="cai"
                        id="cai"
                        placeholder="9"
                      />

                      <UncontrolledTooltip placement="right" target="Cai">
                        <span className="fw-bolder">Cai</span> Calcio
                        intercambiable <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>

                      {/* Ki */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="ki"
                      >
                        Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="ki"
                        id="ki"
                        placeholder="2"
                        value={dataForm.ki}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="Ki">
                        <span className="fw-bolder">Ki</span> Potasio
                        intercambiable <br />
                        <span className="fw-bolder">Unidades</span>: meq/100gr o
                        cmolc/kg
                      </UncontrolledTooltip>
                    </Col>

                    <Col md="4" sm="12">
                      {/* N-NO3 */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="nno3"
                      >
                        N-NO3 <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="nno3"
                        id="nno3"
                        placeholder="15"
                        value={dataForm.nno3}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="N-NO3">
                        <span className="fw-bolder">N-NO3</span> N de Nitratos a
                        la siembra expresado en ppm <br />
                        <span className="fw-bolder">Unidades</span>: mg/kg o ppm
                      </UncontrolledTooltip>

                      {/* Fmin */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="fmin"
                      >
                        Fmin <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="fmin"
                        id="fmin"
                        placeholder="0.11"
                      />

                      <UncontrolledTooltip placement="right" target="Fmin">
                        <span className="fw-bolder">Fmin</span> Factor de
                        mineralización. Fracción del N total que es
                        potencialmente mineralizable. Los valores frecuentes van
                        de 0.07 a 0.12 y varían según el manejo del lote. Suelos
                        agotados o imperfectamente drenados corresponden a
                        valores mas bajos de Fmin.
                      </UncontrolledTooltip>

                      {/* PH */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="ph"
                      >
                        PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="ph"
                        id="ph"
                        placeholder="6.7"
                        value={dataForm.ph}
                        onChange={handleChange}
                      />

                      <UncontrolledTooltip placement="right" target="PH">
                        <span className="fw-bolder">PH</span> Reacción del
                        suelo. Relación suelo agua 1:2.5
                      </UncontrolledTooltip>

                      {/* Mgi */}
                      <Label
                        className="mt-1 d-flex align-items-center justify-content-between"
                        htmlFor="mgi"
                      >
                        Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                      </Label>
                      <Input
                        type="number"
                        name="mgi"
                        id="mgi"
                        placeholder="1.2"
                        value={dataForm.mgi}
                        onChange={handleChange}
                      />

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
                          <Label className="mt-1" htmlFor="depthStratumTwo">
                            Profundidad (cm)
                          </Label>
                          <Input
                            type="select"
                            name="depthStratumTwo"
                            id="depthStratumTwo"
                            // onChange={(e) => {
                            //   e.preventDefault();
                            //   let selectedValue = e.target.value;
                            //   setProfundidadEstratoDos(selectedValue);
                            // }}
                            onChange={handleChange}
                          >
                            <option selected value={" "}>
                              - Seleccione una profundidad -
                            </option>
                            <option value={"20 a 40"}>20 a 40</option>
                            {estratoTres !== false ? null : (
                              <option value={"20 a 60"}>20 a 60</option>
                            )}
                          </Input>

                          {/* S-SO4  */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="sso4StratumTwo"
                          >
                            S-SO4{" "}
                            <FiHelpCircle id="S-SO4" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="sso4StratumTwo"
                            id="sso4StratumTwo"
                            placeholder="8"
                            value={dataForm.sso4StratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="S-SO4">
                            <span className="fw-bolder">S-SO4 </span> Azufre de
                            sulfatos expresado en ppm <br />{" "}
                            <span className="fw-bolder">Unidad</span>: ppm
                          </UncontrolledTooltip>

                          {/* P */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="phosphateStratumTwo"
                          >
                            P{" "}
                            <FiHelpCircle id="Fosforo" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="phosphateStratumTwo"
                            id="phosphateStratumTwo"
                            placeholder="14"
                            value={dataForm.phosphateStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip
                            placement="right"
                            target="Fosforo"
                          >
                            <span className="fw-bolder">P</span> Fosforo
                            extraíble. Técnica Bray y Kurtz Nº1 <br />{" "}
                            <span className="fw-bolder">Unidades</span>: ppm o
                            mg/kg
                          </UncontrolledTooltip>

                          {/* CIC */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="cicStratumTwo"
                          >
                            CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="cicStratumTwo"
                            id="cicStratumTwo"
                            placeholder="14"
                            value={dataForm.cicStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="CIC">
                            <span className="fw-bolder">CIC</span> Capacidad de
                            intercambio catiónico <br />{" "}
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>

                          {/* Nai */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="naiStratumTwo"
                          >
                            Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="naiStratumTwo"
                            id="naiStratumTwo"
                            placeholder="0.3"
                            value={dataForm.naiStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="Nai">
                            <span className="fw-bolder">Nai</span> Sodio
                            intercambiable <br />{" "}
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>
                        </Col>

                        <Col md="4" sm="12">
                          {/* Densidad del suelo */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="soilDensityStratumTwo"
                          >
                            Densidad del suelo{" "}
                            <FiHelpCircle
                              id="densidadDelSuelo"
                              className="fs-5 me-1"
                            />
                          </Label>
                          <Input
                            type="number"
                            name="soilDensityStratumTwo"
                            id="soilDensityStratumTwo"
                            placeholder="1.35"
                            value={dataForm.soilDensityStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip
                            placement="right"
                            target="densidadDelSuelo"
                          >
                            <span className="fw-bolder">
                              Densidad del suelo
                            </span>{" "}
                            Densidad del estrato <br />{" "}
                            <span className="fw-bolder">Unidad</span>: gr/cm3
                          </UncontrolledTooltip>

                          {/* N total */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="totalNStratumTwo"
                          >
                            N total{" "}
                            <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="totalNStratumTwo"
                            id="totalNStratumTwo"
                            placeholder="0.12"
                            value={dataForm.totalNStratumTwo}
                            onChange={handleChange}
                          />

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
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="ceStratumTwo"
                          >
                            CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="ceStratumTwo"
                            id="ceStratumTwo"
                            placeholder="0.5"
                            value={dataForm.ceStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="CE">
                            <span className="fw-bolder">CE</span> Conductividad
                            eléctrica del extracto de saturación <br />
                            <span className="fw-bolder">Unidad</span>: dS/m
                          </UncontrolledTooltip>

                          {/* Cai */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="caiStratumTwo"
                          >
                            Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="caiStratumTwo"
                            id="caiStratumTwo"
                            placeholder="9"
                            value={dataForm.caiStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="Cai">
                            <span className="fw-bolder">Cai</span> Calcio
                            intercambiable <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>

                          {/* Ki */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="kiStratumTwo"
                          >
                            Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="kiStratumTwo"
                            id="kiStratumTwo"
                            placeholder="2"
                            value={dataForm.kiStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="Ki">
                            <span className="fw-bolder">Ki</span> Potasio
                            intercambiable <br />
                            <span className="fw-bolder">Unidades</span>:
                            meq/100gr o cmolc/kg
                          </UncontrolledTooltip>
                        </Col>

                        <Col md="4" sm="12">
                          {/* N-NO3 */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="nno3StratumTwo"
                          >
                            N-NO3{" "}
                            <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="nno3StratumTwo"
                            id="nno3StratumTwo"
                            placeholder="15"
                            value={dataForm.nno3StratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="N-NO3">
                            <span className="fw-bolder">N-NO3</span> N de
                            Nitratos a la siembra expresado en ppm <br />
                            <span className="fw-bolder">Unidades</span>: mg/kg o
                            ppm
                          </UncontrolledTooltip>

                          {/* Fmin */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="phStratumTwo"
                          >
                            Fmin{" "}
                            <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="phStratumTwo"
                            id="phStratumTwo"
                            placeholder="0.11"
                            value={dataForm.phStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="Fmin">
                            <span className="fw-bolder">Fmin</span> Factor de
                            mineralización. Fracción del N total que es
                            potencialmente mineralizable. Los valores frecuentes
                            van de 0.07 a 0.12 y varían según el manejo del
                            lote. Suelos agotados o imperfectamente drenados
                            corresponden a valores mas bajos de Fmin.
                          </UncontrolledTooltip>

                          {/* PH */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="mgiStratumTwo"
                          >
                            PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="mgiStratumTwo"
                            id="mgiStratumTwo"
                            placeholder="6.7"
                            value={dataForm.mgiStratumTwo}
                            onChange={handleChange}
                          />

                          <UncontrolledTooltip placement="right" target="PH">
                            <span className="fw-bolder">PH</span> Reacción del
                            suelo. Relación suelo agua 1:2.5
                          </UncontrolledTooltip>

                          {/* Mgi */}
                          <Label
                            className="mt-1 d-flex align-items-center justify-content-between"
                            htmlFor="mgiStratumTwo"
                          >
                            Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                          </Label>
                          <Input
                            type="number"
                            name="mgiStratumTwo"
                            id="mgiStratumTwo"
                            placeholder="1.2"
                            value={dataForm.mgiStratumTwo}
                            onChange={handleChange}
                          />

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

                  {/* {profundidadEstratoDos === "20 a 40" ? ( */}
                  {dataForm.depthStratumTwo === "20 a 40" ? (
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
                        <Label className="mt-1" htmlFor="depthStratumThree">
                          Profundidad (cm)
                        </Label>
                        <Input
                          type="select"
                          name="depthStratumThree"
                          id="depthStratumThree"
                          onChange={handleChange}
                        >
                          <option selected value={" "}>
                            - Seleccione una profundidad -
                          </option>
                          <option value={"40 a 60"}>40 a 60</option>
                        </Input>

                        {/* S-SO4  */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="sso4StratumThree"
                        >
                          S-SO4{" "}
                          <FiHelpCircle id="S-SO4" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="sso4StratumThree"
                          id="sso4StratumThree"
                          placeholder="8"
                          value={dataForm.sso4StratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="S-SO4">
                          <span className="fw-bolder">S-SO4 </span> Azufre de
                          sulfatos expresado en ppm <br />{" "}
                          <span className="fw-bolder">Unidad</span>: ppm
                        </UncontrolledTooltip>

                        {/* P */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="phosphateStratumThree"
                        >
                          P <FiHelpCircle id="Fosforo" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="phosphateStratumThree"
                          id="phosphateStratumThree"
                          placeholder="14"
                          value={dataForm.phosphateStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="Fosforo">
                          <span className="fw-bolder">P</span> Fosforo
                          extraíble. Técnica Bray y Kurtz Nº1 <br />{" "}
                          <span className="fw-bolder">Unidades</span>: ppm o
                          mg/kg
                        </UncontrolledTooltip>

                        {/* CIC */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="cicStratumThree"
                        >
                          CIC <FiHelpCircle id="CIC" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="cicStratumThree"
                          id="cicStratumThree"
                          placeholder="14"
                          value={dataForm.cicStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="CIC">
                          <span className="fw-bolder">CIC</span> Capacidad de
                          intercambio catiónico <br />{" "}
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>

                        {/* Nai */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="naiStratumThree"
                        >
                          Nai <FiHelpCircle id="Nai" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="naiStratumThree"
                          id="naiStratumThree"
                          placeholder="0.3"
                          value={dataForm.naiStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="Nai">
                          <span className="fw-bolder">Nai</span> Sodio
                          intercambiable <br />{" "}
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>
                      </Col>

                      <Col md="4" sm="12">
                        {/* Densidad del suelo */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="soilDensityStratumThree"
                        >
                          Densidad del suelo{" "}
                          <FiHelpCircle
                            id="densidadDelSuelo"
                            className="fs-5 me-1"
                          />
                        </Label>
                        <Input
                          type="number"
                          name="soilDensityStratumThree"
                          id="soilDensityStratumThree"
                          placeholder="1.35"
                          value={dataForm.soilDensityStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip
                          placement="right"
                          target="densidadDelSuelo"
                        >
                          <span className="fw-bolder">Densidad del suelo</span>{" "}
                          Densidad del estrato <br />{" "}
                          <span className="fw-bolder">Unidad</span>: gr/cm3
                        </UncontrolledTooltip>

                        {/* N total */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="totalNStratumThree"
                        >
                          N total{" "}
                          <FiHelpCircle id="nTotal" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="totalNStratumThree"
                          id="totalNStratumThree"
                          placeholder="0.12"
                          value={dataForm.totalNStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="nTotal">
                          <span className="fw-bolder">Nitrógeno total</span>{" "}
                          Método de Kjeldahl. Ingresar gr, % o ppm <br />
                          <span className="fw-bolder">Unidades</span>: %, mg/kg
                          o ppm (tengo que corroborar con Miguel)
                        </UncontrolledTooltip>

                        {/* CE */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="ceStratumThree"
                        >
                          CE <FiHelpCircle id="CE" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="ceStratumThree"
                          id="ceStratumThree"
                          placeholder="0.5"
                          value={dataForm.ceStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="CE">
                          <span className="fw-bolder">CE</span> Conductividad
                          eléctrica del extracto de saturación <br />
                          <span className="fw-bolder">Unidad</span>: dS/m
                        </UncontrolledTooltip>

                        {/* Cai */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="caiStratumThree"
                        >
                          Cai <FiHelpCircle id="Cai" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="caiStratumThree"
                          id="caiStratumThree"
                          placeholder="9"
                          value={dataForm.caiStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="Cai">
                          <span className="fw-bolder">Cai</span> Calcio
                          intercambiable <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>

                        {/* Ki */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="kiStratumThree"
                        >
                          Ki <FiHelpCircle id="Ki" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="kiStratumThree"
                          id="kiStratumThree"
                          placeholder="2"
                          value={dataForm.kiStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="Ki">
                          <span className="fw-bolder">Ki</span> Potasio
                          intercambiable <br />
                          <span className="fw-bolder">Unidades</span>: meq/100gr
                          o cmolc/kg
                        </UncontrolledTooltip>
                      </Col>

                      <Col md="4" sm="12">
                        {/* N-NO3 */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="nno3StratumThree"
                        >
                          N-NO3{" "}
                          <FiHelpCircle id="N-NO3" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="nno3StratumThree"
                          id="nno3StratumThree"
                          placeholder="15"
                          value={dataForm.nno3StratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="N-NO3">
                          <span className="fw-bolder">N-NO3</span> N de Nitratos
                          a la siembra expresado en ppm <br />
                          <span className="fw-bolder">Unidades</span>: mg/kg o
                          ppm
                        </UncontrolledTooltip>

                        {/* Fmin */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="fminStratumThree"
                        >
                          Fmin <FiHelpCircle id="Fmin" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="fminStratumThree"
                          id="fminStratumThree"
                          placeholder="0.11"
                          value={dataForm.fminStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="Fmin">
                          <span className="fw-bolder">Fmin</span> Factor de
                          mineralización. Fracción del N total que es
                          potencialmente mineralizable. Los valores frecuentes
                          van de 0.07 a 0.12 y varían según el manejo del lote.
                          Suelos agotados o imperfectamente drenados
                          corresponden a valores mas bajos de Fmin.
                        </UncontrolledTooltip>

                        {/* PH */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="phStratumThree"
                        >
                          PH <FiHelpCircle id="PH" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="phStratumThree"
                          id="phStratumThree"
                          placeholder="6.7"
                          value={dataForm.phStratumThree}
                          onChange={handleChange}
                        />

                        <UncontrolledTooltip placement="right" target="PH">
                          <span className="fw-bolder">PH</span> Reacción del
                          suelo. Relación suelo agua 1:2.5
                        </UncontrolledTooltip>

                        {/* Mgi */}
                        <Label
                          className="mt-1 d-flex align-items-center justify-content-between"
                          htmlFor="mgiStratumThree"
                        >
                          Mgi <FiHelpCircle id="Mgi" className="fs-5 me-1" />
                        </Label>
                        <Input
                          type="number"
                          name="mgiStratumThree"
                          id="mgiStratumThree"
                          placeholder="1.2"
                          value={dataForm.mgiStratumThree}
                          onChange={handleChange}
                        />

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
              outline
              color="danger"
              className="me-1"
              onClick={() => setBackModal(!backModal)}
            >
              Volver
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
