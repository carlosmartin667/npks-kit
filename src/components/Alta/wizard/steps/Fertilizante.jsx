// ** React Imports
import React, { Fragment, useContext, useState } from "react";

// ** Icons Imports
import { ArrowLeft } from "react-feather";

import { FiHelpCircle } from "react-icons/fi";

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
  UncontrolledTooltip,
  Table,
} from "reactstrap";

// ** import DataContext
import { DataContext } from "../../../../utility/context/LoteProvider";

const Fertilizante = ({ stepper }) => {
  const {
    handleWizard,
    dataForm,
    handleChange,
    // ** state Arrancador
    contenidoNitrogeno,
    setContenidoNitrogeno,
    contenidoFosforo,
    setContenidoFosforo,
    contenidoPotasio,
    setContenidoPotasio,
    contenidoAzufre,
    setContenidoAzufre,
    eficienciasNitrogeno,
    setEficienciasNitrogeno,
    eficienciasFosforo,
    setEficienciasFosforo,
    eficienciasPotasio,
    setEficienciasPotasio,
    eficienciasAzufre,
    setEficienciasAzufre,
  } = useContext(DataContext);

  const [arrancadorAbonoOrganico, setArrancadorAbonoOrganico] =
    useState("Ninguno");

  const [selectedDefaultArrancador, setSelectedDefaultArrancador] = useState(
    "Fosfato monoamónico MAP"
  );

  return (
    <Fragment>
      <div className="content-header">
        <h3 className="mb-0">Fertilizantes</h3>
      </div>
      <Form onSubmit={handleWizard}>
        <Row className="match-height mt-1">
          <Col md="6" sm="12" className="mb-1">
            <Label
              className="form-label mt-1 d-flex align-items-center justify-content-between"
              htmlFor="starterOrOrganicFertilizer"
            >
              Arrancador o abono orgánico
              <FiHelpCircle id="Arrancador" className="fs-5 me-1" />
            </Label>
            <Input
              type="select"
              name="starterOrOrganicFertilizer"
              id="starterOrOrganicFertilizer"
              // onChange={handleChange}
              onChange={(e) => {
                // e.preventDefault();
                handleChange(e);
                let selectedValue = e.target.value;
                setArrancadorAbonoOrganico(selectedValue);
              }}
            >
              <option selected value={"Ninguno"}>
                Ninguno
              </option>
              <option value={"Arrancador"}>Arrancador</option>
              <option value={"Abono orgánico"}>Abono orgánico</option>
            </Input>

            <UncontrolledTooltip placement="right" target="Arrancador">
              <span className="fw-bolder">Arrancador o abono orgánico: </span>{" "}
              Si utiliza alguno de estos seleccione, de lo contrario seleccione
              “ninguno”. <br />{" "}
            </UncontrolledTooltip>
          </Col>

          {/* {arrancadorAbonoOrganico === "Ninguno" ? null : ( */}
          {arrancadorAbonoOrganico !== "Ninguno" ? (
            <>
              <Col md="6" sm="12" className="mb-1">
                <Label
                  className="form-label mt-1 d-flex align-items-center justify-content-between"
                  htmlFor="quantity"
                >
                  Cantidad (kg/ha)
                  <FiHelpCircle id="Cantidad" className="fs-5 me-1" />
                </Label>
                <Input
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="50"
                  value={dataForm.quantity}
                  onChange={handleChange}
                />
                <UncontrolledTooltip placement="right" target="Cantidad">
                  <span className="fw-bolder">Cantidad (kg/ha): </span> Cantidad
                  en kg/ha del arrancador o abono orgánico que utiliza a la
                  siembra. <br />{" "}
                </UncontrolledTooltip>
              </Col>

              {arrancadorAbonoOrganico === "Arrancador" ? (
                <>
                  <Col md="6" sm="12" className="mb-3">
                    <Label
                      className="form-label d-flex align-items-center justify-content-between"
                      htmlFor="starter"
                    >
                      Arrancador{" "}
                      <FiHelpCircle
                        id="arrancadorOAbonoOrganico"
                        className="fs-5 me-1"
                      />
                    </Label>
                    <Input
                      type="select"
                      name="starter"
                      id="starter"
                      onChange={(e) => {
                        // e.preventDefault();
                        handleChange(e);
                        let selectedValue = e.target.value;
                        setSelectedDefaultArrancador(selectedValue);
                      }}
                    >
                      <option value={"Fosfato monoamónico MAP"}>
                        Fosfato monoamónico MAP
                      </option>

                      <option value={"Fosfato diamónico DAP"}>
                        Fosfato diamónico DAP
                      </option>

                      <option value={"Súper fosfato simple SPS"}>
                        Súper fosfato simple SPS
                      </option>

                      <option value={"Súper fosfato triple SPT"}>
                        Súper fosfato triple SPT
                      </option>

                      <option value={"Urea"}>Urea</option>

                      <option value={"Otro"}>Otro</option>
                    </Input>
                    <UncontrolledTooltip
                      placement="right"
                      target="arrancadorOAbonoOrganico"
                    >
                      <span className="fw-bolder">Arrancador: </span> Seleccione
                      un arrancador o agregue datos en “otro”. <br />{" "}
                    </UncontrolledTooltip>
                  </Col>
                </>
              ) : null}

              {arrancadorAbonoOrganico === "Abono orgánico" ? (
                <>
                  <Col md="6" sm="12" className="mb-3">
                    <Label
                      className="form-label d-flex align-items-center justify-content-between"
                      htmlFor="organicFertilizer"
                    >
                      Abono orgánico{" "}
                      {/* <FiHelpCircle
                        id="arrancadorOAbonoOrganico"
                        className="fs-5 me-1"
                      /> */}
                    </Label>
                    <Input
                      type="select"
                      name="organicFertilizer"
                      id="organicFertilizer"
                      onChange={(e) => {
                        // e.preventDefault();
                        handleChange(e);
                        let selectedValue = e.target.value;
                        setSelectedDefaultArrancador(selectedValue);
                      }}
                    >
                      <option value={"Estiércol vacuno sólido"}>
                        Estiércol vacuno sólido
                      </option>
                      <option value={"Purín de vacuno"}>Purín de vacuno</option>
                      <option value={"Purín vaca lechera"}>
                        Purín vaca lechera
                      </option>
                      <option value={"Estiércol feedlot vacuno"}>
                        Estiércol feedlot vacuno
                      </option>
                      <option value={"Estiércol cerdo solido"}>
                        Estiércol cerdo solido
                      </option>
                      <option value={"Purín de cerdo"}>Purín de cerdo</option>
                      <option value={"Estiércol solido de aves"}>
                        Estiércol solido de aves
                      </option>
                      <option value={"Purín de aves"}>Purín de aves</option>
                      <option value={"Estiércol equino"}>
                        Estiércol equino
                      </option>
                      <option value={"Estiércol ovino"}>Estiércol ovino</option>
                    </Input>
                    {/* <UncontrolledTooltip
                      placement="right"
                      target="arrancadorOAbonoOrganico"
                    >
                      <span className="fw-bolder">Arrancador: </span> Seleccione
                      un arrancador o agregue datos en “otro”. <br />{" "}
                    </UncontrolledTooltip> */}
                  </Col>
                </>
              ) : null}

              <Col md="6" sm="12" className="mb-3">
                <Label
                  className="form-label d-flex align-items-center justify-content-between"
                  htmlFor="price"
                >
                  Precio (u$s/tn){" "}
                  <FiHelpCircle id="Precio" className="fs-5 me-1" />
                </Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="1100"
                  value={dataForm.price}
                  onChange={handleChange}
                />
                <UncontrolledTooltip placement="right" target="Precio">
                  <span className="fw-bolder">Precio (u$s/tn): </span> Precio en
                  u$s/tn de dicho arrancador o abono orgánico. <br />{" "}
                </UncontrolledTooltip>
              </Col>
            </>
          ) : null}
        </Row>

        {arrancadorAbonoOrganico === "Arrancador" ? (
          <>
            <Row>
              <Table borderless responsive>
                <thead>
                  <tr>
                    <th> </th>
                    <th>Nitrógeno</th>
                    <th>Fosforo</th>
                    <th>Potasio</th>
                    <th>Azufre</th>
                  </tr>
                </thead>

                {selectedDefaultArrancador === "Fosfato monoamónico MAP" && (
                  <tbody>
                    <tr>
                      <th scope="row">
                        Contenido Kg/Kg{" "}
                        <FiHelpCircle id="ContenidoKg" className="fs-5 ms-1" />
                      </th>
                      <td>0.11kg/kg</td>
                      <td>0.21kg/kg</td>
                      <td>0kg/kg</td>
                      <td>0kg/kg</td>
                    </tr>

                    <UncontrolledTooltip placement="right" target="ContenidoKg">
                      <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                      Composición del fertilizante expresada en en kg/kg de cada
                      elemento. Ejemplo: Fosfato monoamónico: <br />
                      <br />
                      Composición (%) : N 11- P2O5 48- K2O 0<br />
                      Composición (kg/kg): N 0.11- P 0.21- K 0
                    </UncontrolledTooltip>

                    <tr>
                      <th scope="row">
                        Eficiencias %{" "}
                        <FiHelpCircle id="Eficiencias" className="fs-5 ms-1" />
                      </th>
                      <td>65%</td>
                      <td>50%</td>
                      <td>0%</td>
                      <td>0%</td>
                    </tr>

                    <UncontrolledTooltip placement="right" target="Eficiencias">
                      <span className="fw-bolder">Eficiencias %: </span>{" "}
                      Eficiencia de cada elemento, en función del tipo de
                      fertilizante, método de aplicación, condiciones
                      ambientales, tipo de suelo.
                    </UncontrolledTooltip>
                  </tbody>
                )}

                {selectedDefaultArrancador === "Fosfato diamónico DAP" && (
                  <>
                    {/* Fosfato diamónico DAP */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0.18kg/kg</td>
                        <td>0.19kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en en kg/kg de
                        cada elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>65%</td>
                        <td>50%</td>
                        <td>0%</td>
                        <td>0%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Súper fosfato simple SPS" && (
                  <>
                    {/* Súper fosfato simple SPS */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0kg/kg</td>
                        <td>0.09kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0.12 kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en en kg/kg de
                        cada elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0%</td>
                        <td>50%</td>
                        <td>0%</td>
                        <td>50%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Súper fosfato triple SPT" && (
                  <>
                    {/* Súper fosfato triple SPT */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0kg/kg</td>
                        <td>0.2kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en en kg/kg de
                        cada elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0%</td>
                        <td>50%</td>
                        <td>0%</td>
                        <td>0%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Urea" && (
                  <>
                    {/* Urea */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>0.46kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en en kg/kg de
                        cada elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>65%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>0%</td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}

                {selectedDefaultArrancador === "Otro" && (
                  <>
                    {/* Otro */}
                    <tbody>
                      <tr>
                        <th scope="row">
                          Contenido Kg/Kg{" "}
                          <FiHelpCircle
                            id="ContenidoKg"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>
                          <Input
                            type="text"
                            name="nitrogenContent"
                            id="nitrogenContent"
                            value={dataForm.nitrogenContent}
                            onChange={(e) =>
                              // setContenidoNitrogeno(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="phosphorusContent"
                            id="phosphorusContent"
                            value={dataForm.phosphorusContent}
                            onChange={(e) =>
                              // setContenidoFosforo(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="potassiumContent"
                            id="potassiumContent"
                            value={dataForm.potassiumContent}
                            onChange={(e) =>
                              // setContenidoPotasio(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="sulphurContent"
                            id="sulphurContent"
                            value={dataForm.sulphurContent}
                            onChange={(e) =>
                              // setContenidoAzufre(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="ContenidoKg"
                      >
                        <span className="fw-bolder">Contenido Kg/Kg: </span>{" "}
                        Composición del fertilizante expresada en en kg/kg de
                        cada elemento. Ejemplo: Fosfato monoamónico: <br />
                        <br />
                        Composición (%) : N 11- P2O5 48- K2O 0<br />
                        Composición (kg/kg): N 0.11- P 0.21- K 0
                      </UncontrolledTooltip>

                      <tr>
                        <th scope="row">
                          Eficiencias %{" "}
                          <FiHelpCircle
                            id="Eficiencias"
                            className="fs-5 ms-1"
                          />
                        </th>
                        <td>
                          <Input
                            type="text"
                            name="nitrogenEfficiencies"
                            id="nitrogenEfficiencies"
                            value={dataForm.nitrogenEfficiencies}
                            onChange={(e) =>
                              // setEficienciasNitrogeno(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="phosphorusEfficiencies"
                            value={dataForm.phosphorusEfficiencies}
                            onChange={(e) =>
                              // setEficienciasFosforo(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="potassiumEfficiencies"
                            value={dataForm.potassiumEfficiencies}
                            onChange={(e) =>
                              // setEficienciasPotasio(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="text"
                            name="sulfurEfficiencies"
                            id="sulfurEfficiencies"
                            value={dataForm.sulfurEfficiencies}
                            onChange={(e) =>
                              // setEficienciasAzufre(e.target.value)
                              handleChange(e)
                            }
                          />
                        </td>
                      </tr>

                      <UncontrolledTooltip
                        placement="right"
                        target="Eficiencias"
                      >
                        <span className="fw-bolder">Eficiencias %: </span>{" "}
                        Eficiencia de cada elemento, en función del tipo de
                        fertilizante, método de aplicación, condiciones
                        ambientales, tipo de suelo.
                      </UncontrolledTooltip>
                    </tbody>
                  </>
                )}
              </Table>
            </Row>
            <hr />
          </>
        ) : null}

        <Row>
          <Col md="6" sm="12" className="mt-2 mb-2">
            <Label
              className="form-label d-flex align-items-center justify-content-between"
              htmlFor="costOfFertilizerApplicationAndSoilAnalysis"
            >
              Costo de aplicación del fertilizante y del análisis de suelo
              (u$s/ha){" "}
              <FiHelpCircle id="costoDeAplicación" className="fs-5 me-1" />
            </Label>
            <Input
              type="number"
              name="costOfFertilizerApplicationAndSoilAnalysis"
              id="costOfFertilizerApplicationAndSoilAnalysis"
              placeholder="11"
              value={dataForm.costOfFertilizerApplicationAndSoilAnalysis}
              onChange={handleChange}
            />
            <UncontrolledTooltip placement="right" target="costoDeAplicación">
              <span className="fw-bolder">
                Costo de aplicación del fertilizante y del análisis de suelo
                (u$s/ha):{" "}
              </span>{" "}
              Costo de la técnica que se vera reflejado en el análisis de
              sensibilidad de los resultados. <br />{" "}
            </UncontrolledTooltip>
          </Col>
        </Row>

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
            <span className="align-middle d-sm-inline-block d-none">Atras</span>
          </Button>
          <Button type="submit" color="success" className="btn-submit">
            Guardar
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Fertilizante;
