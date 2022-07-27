import React, { useContext, useState } from "react";

// ** Icons Imports
import {
  MoreVertical,
  Edit,
  Trash,
  Monitor,
  TrendingUp,
  TrendingDown,
} from "react-feather";

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  Button,
  CardHeader,
  CardTitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "reactstrap";

// ** Import Link from react-router-dom
import { Link } from "react-router-dom";

// ** import icon ToolBox
import toolBox from "@src/assets/images/icons/toolbox.svg";

// ** import dataContext from LoteProvider
import { DataContext } from "../../utility/context/LoteProvider";

const TableCompany = () => {
  const { data, deleteTask } = useContext(DataContext);
  const [verModal, setVerModal] = useState(false);

  const medidaDesktop = document.documentElement.clientWidth;

  // const data = [
  //   {
  //     // img: require("@src/assets/images/icons/toolbox.svg").default,
  //     name: "+ Lote",
  //     // description: 'Alta productividad',
  //     // icon: <Monitor size={18} />,
  //     countryside: null,
  //     location: null,
  //     city: null,
  //     date: null,
  //     crop: null,
  //     cropUp: null,
  //     // btnDelete: <Trash className="me-50" size={15} />,
  //   },
  // {
  //   // img: require("@src/assets/images/icons/toolbox.svg").default,
  //   name: "Lote 1",
  //   // description: 'Alta productividad',
  //   // icon: <Monitor size={18} />,
  //   countryside: "Gastaldi",
  //   location: "Villa María",
  //   city: "Córdoba",
  //   date: "15/12/2022",
  //   crop: "Maíz",
  //   cropUp: true,
  //   // btnDelete: <Trash className="me-50" size={15} />,
  // },
  // {
  //   img: require("@src/assets/images/icons/book.svg").default,
  //   name: "Lote 5",
  //   // description: null,
  //   icon: <Monitor size={18} />,
  //   countryside: "El Mimoso",
  //   location: "Río IV",
  //   city: "Córdoba",
  //   date: "11/11/2022",
  //   crop: "Soja",
  //   cropUp: false,
  //   btnDelete: <Trash className="me-50" size={15} />,
  // },
  // {
  //   // img: require("@src/assets/images/icons/book.svg").default,
  //   name: "Lote 2",
  //   // description: 'Baja productividad',
  //   // icon: <Monitor size={18} />,
  //   countryside: "Aleman",
  //   location: "Pasco",
  //   city: "Córdoba",
  //   date: null,
  //   crop: null,
  //   cropUp: null,
  //   // btnDelete: <Trash className="me-50" size={15} />,
  // },
  // {
  //   img: require("@src/assets/images/icons/toolbox.svg").default,
  //   name: "Lote 3",
  //   // description: null,
  //   icon: <Monitor size={18} />,
  //   countryside: "Antonio",
  //   location: "Esperanza",
  //   city: "Santa Fe",
  //   date: "01/04/2022",
  //   crop: "Alfalfa",
  //   cropUp: true,
  //   btnDelete: <Trash className="me-50" size={15} />,
  // },
  // ];

  const renderData = () => {
    return (
      <>
        {data.map((col, index) => (
          <>
            <tr key={index}>
              {/* NOMBRE */}
              <td>
                <div className="d-flex aling-items-center">
                  <img className="me-75" src={toolBox} alt={col.name} />
                  <div className="d-flex flex-column">
                    <Link to="/new-lote" className="align-middle fw-bolder">
                      {col.name}
                    </Link>
                    <span className="font-small-2 text-muted">
                      {col.description}
                    </span>
                  </div>
                </div>
              </td>
              {/* CAMPO */}
              <td>
                <span className="fw-bolder mb-25">{col.field}</span>
              </td>
              {/* LOCALIDAD */}
              <td className="text-nowrap">
                <div className="d-flex flex-column">
                  <span className="fw-bolder mb-25">{col.location}</span>
                  <span className="font-small-2 text-muted">
                    {col.province}
                  </span>
                </div>
              </td>
              {/* CULTIVO */}
              <td>
                <div className="d-flex align-items-center">
                  <span className="fw-bolder ms-1">{col.crop}</span>
                  {/* {col.cropUp ? (<TrendingUp size={15} className="text-success" />) : (<TrendingDown size={15} className="text-danger" />)} */}
                </div>
              </td>
              {/* FECHA */}
              <td>
                <Badge
                  pill
                  color={col.cropUp ? "light-primary" : "light-danger"}
                  className="ms-1"
                >
                  {col.date}
                </Badge>
              </td>
              <td>
                <UncontrolledDropdown className="ms-4">
                  <DropdownToggle
                    className="icon-btn hide-arrow"
                    color="transparent"
                    size="sm"
                    caret
                  >
                    <MoreVertical size={15} />
                  </DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem className="w-100">
                      {col.crop && col.date ? (
                        <Link to="/rendimiento">
                          <Monitor className="me-50" size={15} />{" "}
                          <span className="align-middle">Ver</span>
                        </Link>
                      ) : (
                        <span onClick={() => setVerModal(!verModal)}>
                          <Monitor className="me-50" size={15} />{" "}
                          <span className="align-middle">Ver</span>
                        </span>
                      )}
                    </DropdownItem>

                    <DropdownItem className="w-100">
                      <Link to="/Alta">
                        <Edit className="me-50" size={15} />{" "}
                        <span className="align-middle">Agregar / Editar</span>
                      </Link>
                    </DropdownItem>

                    {/* <DropdownItem href='/' onClick={e => e.preventDefault()}>
                <Trash className='me-50' size={15} /> <span className='align-middle'>Eliminar</span>
                </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
              <Modal
                isOpen={verModal}
                // toggle={() => setCenteredModal(!centeredModal)}
                className="modal-dialog-centered"
              >
                {/* toggle={() => setCenteredModal(!centeredModal)} */}
                <ModalHeader>Atención</ModalHeader>
                <ModalBody>
                  <h4 className="mb-2">
                    Para poder ver los resultados de su lote, necesita agregar
                    una recomendación.
                  </h4>
                  <span>
                    Puede crear una recomendación a traves de la tabla en la
                    columna{" "}
                    <span className="color-ejemplo fw-bold">
                      MIS RECOMENDACIONES
                    </span>
                    .
                  </span>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => setVerModal(!verModal)}
                  >
                    Aceptar
                  </Button>
                </ModalFooter>
              </Modal>
              <td>
                <span
                  className="hoverDelete"
                  onClick={() => deleteTask(col.id)}
                >
                  <Trash className="me-50" size={15} />
                </span>
              </td>
            </tr>
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <CardHeader className="d-flex align-items-center justify-content-between">
        <CardTitle>Mis Lotes</CardTitle>
        {data.length === 0 && (
          <Link to="/new-lote" className="btn btn-primary">
            + Lote
          </Link>
        )}
      </CardHeader>

      <CardBody>
        {data.length === 1 ? (
          <>
            {medidaDesktop <= 1024 ? (
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>CAMPO</th>
                    <th>LOCALIDAD</th>
                    <th>CULTIVO</th>
                    <th>FECHA DE SIEMBRA</th>
                    <th>MIS RECOMENDACIONES</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>{renderData()}</tbody>
              </Table>
            ) : (
              <Table hover>
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>CAMPO</th>
                    <th>LOCALIDAD</th>
                    <th>CULTIVO</th>
                    <th>FECHA DE SIEMBRA</th>
                    <th>MIS RECOMENDACIONES</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>{renderData()}</tbody>
              </Table>
            )}
          </>
        ) : (
          <Table responsive hover>
            <thead>
              <tr>
                <th>NOMBRE</th>
                <th>CAMPO</th>
                <th>LOCALIDAD</th>
                <th>CULTIVO</th>
                <th>FECHA DE SIEMBRA</th>
                <th>MIS RECOMENDACIONES</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>{renderData()}</tbody>
          </Table>
        )}
      </CardBody>
    </>
  );
};

export default TableCompany;
