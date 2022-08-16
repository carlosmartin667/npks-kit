// ** React Imports
import { Fragment, useContext, useState } from "react";

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
    // ** state Arrancador
    isCompleteArrancador,
    setIsCompleteArrancador,
    handleCompleteArrancador,
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
    useState("Arrancador");

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
              for="register-select"
            >
              Arrancador o abono orgánico
              <FiHelpCircle id="Arrancador" className="fs-5 me-1" />
            </Label>
            <Input
              type="select"
              name="options"
              id="register-select"
              onChange={(e) => {
                e.preventDefault();
                let selectedValue = e.target.value;
                setArrancadorAbonoOrganico(selectedValue);
              }}
            >
              <option value={"Ninguno"}>Ninguno</option>
              <option selected value={"Arrancador"}>
                Arrancador
              </option>
              <option value={"Estiércol vacuno sólido"}>
                Estiércol vacuno sólido
              </option>
              <option value={"Purín de vacuno"}>Purín de vacuno</option>
              <option value={"Purín vaca lechera"}>Purín vaca lechera</option>
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
              <option value={"Estiércol equino"}>Estiércol equino</option>
              <option value={"Estiércol ovino"}>Estiércol ovino</option>
            </Input>

            <UncontrolledTooltip placement="right" target="Arrancador">
              <span className="fw-bolder">Arrancador o abono orgánico: </span>{" "}
              Si utiliza alguno de estos seleccione, de lo contrario seleccione
              “ninguno”. <br />{" "}
            </UncontrolledTooltip>
          </Col>

          <Col md="6" sm="12" className="mb-1">
            <Label
              className="form-label mt-1 d-flex align-items-center justify-content-between"
              for="register-select"
            >
              Cantidad (kg/ha)
              <FiHelpCircle id="Cantidad" className="fs-5 me-1" />
            </Label>
            <Input type="number" placeholder="11" />
            <UncontrolledTooltip placement="right" target="Cantidad">
              <span className="fw-bolder">Cantidad (kg/ha): </span> Cantidad en
              kg/ha del arrancador o abono orgánico que utiliza a la siembra.{" "}
              <br />{" "}
            </UncontrolledTooltip>
          </Col>

          <Col md="6" sm="12" className="mb-3">
            <Label
              className="form-label d-flex align-items-center justify-content-between"
              for="register-select"
            >
              Precio (u$s/tn) <FiHelpCircle id="Precio" className="fs-5 me-1" />
            </Label>
            <Input type="number" placeholder="11" />
            <UncontrolledTooltip placement="right" target="Precio">
              <span className="fw-bolder">Precio (u$s/tn): </span> Precio en
              u$s/tn de dicho arrancador o abono orgánico. <br />{" "}
            </UncontrolledTooltip>
          </Col>
        </Row>

        {arrancadorAbonoOrganico === "Arrancador" ? (
          <>
            <Row>
              <Col md="6" sm="12" className="mb-3">
                <Label
                  className="form-label d-flex align-items-center justify-content-between mt-1"
                  htmlFor="arrancadorOAbonoOrganico"
                >
                  Arrancador{" "}
                  <FiHelpCircle
                    id="arrancadorOAbonoOrganico"
                    className="fs-5 me-1"
                  />
                </Label>
                <Input
                  type="select"
                  onChange={(e) => {
                    e.preventDefault();
                    let selectedValue = e.target.value;
                    setSelectedDefaultArrancador(selectedValue);
                  }}
                >
                  <option value={"Fosfato monoamónico MAP"}>
                    Fosfato monoamónico MAP
                  </option>

                  <option value={"Otro"}>Otro</option>
                </Input>
                <UncontrolledTooltip
                  placement="right"
                  target="arrancadorOAbonoOrganico"
                >
                  <span className="fw-bolder">Arrancador: </span> Seleccione un
                  arrancador o agregue datos en “otro”. <br />{" "}
                </UncontrolledTooltip>
              </Col>
            </Row>

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
                {selectedDefaultArrancador === "Fosfato monoamónico MAP" ? (
                  <>
                    <tbody>
                      <tr>
                        <th scope="row">Contenido Kg/Kg</th>
                        <td>0.11kg/kg</td>
                        <td>0.21kg/kg</td>
                        <td>0kg/kg</td>
                        <td>0kg/kg</td>
                      </tr>
                      <tr>
                        <th scope="row">Eficiencias %</th>
                        <td>65%</td>
                        <td>50%</td>
                        <td>0%</td>
                        <td>0%</td>
                      </tr>
                    </tbody>
                  </>
                ) : (
                  <>
                    {isCompleteArrancador === false ? (
                      <>
                        <tbody>
                          <tr>
                            <th scope="row">Contenido Kg/Kg</th>
                            <td>
                              <Input
                                type="text"
                                name="contenidoNitrogeno"
                                value={contenidoNitrogeno}
                                onChange={(e) =>
                                  setContenidoNitrogeno(e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="text"
                                name="contenidoFosforo"
                                value={contenidoFosforo}
                                onChange={(e) =>
                                  setContenidoFosforo(e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="text"
                                name="contenidoPotasio"
                                value={contenidoPotasio}
                                onChange={(e) =>
                                  setContenidoPotasio(e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="text"
                                name="contenidoAzufre"
                                value={contenidoAzufre}
                                onChange={(e) =>
                                  setContenidoAzufre(e.target.value)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Eficiencias %</th>
                            <td>
                              <Input
                                type="text"
                                name="eficienciasNitrogeno"
                                value={eficienciasNitrogeno}
                                onChange={(e) =>
                                  setEficienciasNitrogeno(e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="text"
                                name="eficienciasFosforo"
                                value={eficienciasFosforo}
                                onChange={(e) =>
                                  setEficienciasFosforo(e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="text"
                                name="eficienciasPotasio"
                                value={eficienciasPotasio}
                                onChange={(e) =>
                                  setEficienciasPotasio(e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="text"
                                name="eficienciasAzufre"
                                value={eficienciasAzufre}
                                onChange={(e) =>
                                  setEficienciasAzufre(e.target.value)
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </>
                    ) : (
                      <tbody>
                        <tr>
                          <th scope="row">Contenido Kg/Kg</th>
                          <td>{contenidoNitrogeno}</td>
                          <td>{contenidoFosforo}</td>
                          <td>{contenidoPotasio}</td>
                          <td>{contenidoAzufre}</td>
                        </tr>
                        <tr>
                          <th scope="row">Eficiencias %</th>
                          <td>{eficienciasNitrogeno}</td>
                          <td>{eficienciasFosforo}</td>
                          <td>{eficienciasPotasio}</td>
                          <td>{eficienciasAzufre}</td>
                        </tr>
                      </tbody>
                    )}
                  </>
                )}
              </Table>
              {selectedDefaultArrancador ===
              "Fosfato monoamónico MAP" ? null : (
                <>
                  <div className="w-100">
                    <Button
                      color="primary"
                      outline
                      block
                      onClick={handleCompleteArrancador}
                    >
                      {isCompleteArrancador ? "Editar" : "Completar"}
                    </Button>
                  </div>
                </>
              )}
            </Row>
            <hr />
          </>
        ) : null}

        <Row>
          <Col md="6" sm="12" className="mt-2 mb-2">
            <Label
              className="form-label d-flex align-items-center justify-content-between"
              for="register-select"
            >
              Costo de aplicación del fertilizante y del análisis de suelo
              (u$s/ha){" "}
              <FiHelpCircle id="costoDeAplicación" className="fs-5 me-1" />
            </Label>
            <Input type="number" placeholder="11" />
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
            Submit
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

export default Fertilizante;
