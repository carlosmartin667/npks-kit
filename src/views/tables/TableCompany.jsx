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
} from "reactstrap";

// ** Import Link from react-router-dom
import { Link } from "react-router-dom";

const TableCompany = () => {
  const medidaDesktop = document.documentElement.clientWidth;

  const data = [
    {
      img: require("@src/assets/images/icons/toolbox.svg").default,
      name: "Lote 1",
      // description: 'Alta productividad',
      icon: <Monitor size={18} />,
      countryside: "Gastaldi",
      location: "Villa María",
      city: "Córdoba",
      date: "15/12/2022",
      crop: "Maíz",
      cropUp: true,
      btnDelete: <Trash className="me-50" size={15} />,
    },
    {
      img: require("@src/assets/images/icons/book.svg").default,
      name: "Lote 5",
      // description: null,
      icon: <Monitor size={18} />,
      countryside: "El Mimoso",
      location: "Río IV",
      city: "Córdoba",
      date: "11/11/2022",
      crop: "Soja",
      cropUp: false,
      btnDelete: <Trash className="me-50" size={15} />,
    },
    {
      img: require("@src/assets/images/icons/book.svg").default,
      name: "Lote 2",
      // description: 'Baja productividad',
      icon: <Monitor size={18} />,
      countryside: "Aleman",
      location: "Pasco",
      city: "Córdoba",
      date: null,
      crop: null,
      cropUp: null,
      btnDelete: <Trash className="me-50" size={15} />,
    },
    {
      img: require("@src/assets/images/icons/toolbox.svg").default,
      name: "Lote 3",
      // description: null,
      icon: <Monitor size={18} />,
      countryside: "Antonio",
      location: "Esperanza",
      city: "Santa Fe",
      date: "01/04/2022",
      crop: "Alfalfa",
      cropUp: true,
      btnDelete: <Trash className="me-50" size={15} />,
    },
  ];

  const renderData = () => {
    return (
      <>
        {data.map((col, index) => (
          <tr key={index}>
            {/* NOMBRE */}
            <td>
              <div className="d-flex aling-items-center">
                <img className="me-75" src={col.img} alt={col.name} />
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
              <span className="fw-bolder mb-25">{col.countryside}</span>
            </td>
            {/* LOCALIDAD */}
            <td className="text-nowrap">
              <div className="d-flex flex-column">
                <span className="fw-bolder mb-25">{col.location}</span>
                <span className="font-small-2 text-muted">{col.city}</span>
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
                  <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                    {col.crop ? (
                      <Link to="/rendimiento">
                        <Monitor className="me-50" size={15} />{" "}
                        <span className="align-middle">Ver</span>
                      </Link>
                    ) : (
                      <span
                        onClick={() =>
                          alert("Se necesita añadir recomendación")
                        }
                      >
                        <Monitor className="me-50" size={15} />{" "}
                        <span className="align-middle">Ver</span>
                      </span>
                    )}
                  </DropdownItem>

                  <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
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
            <td>
              <span
                className="hoverDelete"
                onClick={() => alert("Se elimina el lote")}
              >
                {col.btnDelete}
              </span>
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <CardHeader className="d-flex align-items-center justify-content-between">
        <CardTitle>Mis Lotes</CardTitle>
        {/* <Link to="/new-lote" className="btn btn-primary">+ Lote</Link> */}
      </CardHeader>

      <CardBody>
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
      </CardBody>
    </>
  );
};

export default TableCompany;
