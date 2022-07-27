import React, { createContext, useEffect, useState } from "react";

// ** Import navigate from react-router-dom
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const DataContext = createContext();

const initialData = [
  {
    id: 1,
    name: "+ Lote",
    field: null,
    location: null,
    province: null,
    country: null,
    date: null,
    crop: null,
    cropUp: null,
  },
  {
    id: 2,
    name: "Lote 1",
    field: "Gastaldi",
    location: "Villa María",
    province: "Córdoba",
    country: "Argentina",
    date: "15/12/2022",
    crop: "Maíz",
    cropUp: true,
  },
  {
    id: 3,
    name: "Lote 2",
    field: "Aleman",
    location: "Pasco",
    province: "Córdoba",
    country: "Argentina",
    date: null,
    crop: null,
    cropUp: null,
  },
  // {
  //   id: 1,
  //   // img: require("@src/assets/images/icons/toolbox.svg").default,
  //   name: "+ Lote",
  //   // description: 'Alta productividad',
  //   // icon: <Monitor size={18} />,
  //   field: null,
  //   location: null,
  //   city: null,
  //   date: null,
  //   crop: null,
  //   cropUp: null,
  //   // btnDelete: <Trash className="me-50" size={15} />,
  // },
  // {
  //   id: 2,
  //   // img: require("@src/assets/images/icons/toolbox.svg").default,
  //   name: "Lote 1",
  //   // description: 'Alta productividad',
  //   // icon: <Monitor size={18} />,
  //   field: "Gastaldi",
  //   location: "Villa María",
  //   provinceLote: "Córdoba",
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
  //   id: 3,
  //   // img: require("@src/assets/images/icons/book.svg").default,
  //   name: "Lote 2",
  //   // description: 'Baja productividad',
  //   // icon: <Monitor size={18} />,
  //   field: "Aleman",
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
];

export default function LoteProvider({ children }) {
  // ** State modal Account
  const [centeredModal, setCenteredModal] = useState(false);

  // ** State form Lote y Manejo
  const [data, setData] = useState(initialData);
  const [nameLote, setNameLote] = useState("");
  const [fieldLote, setFieldLote] = useState("");

  const [locationLote, setLocationLote] = useState("");
  const [cityLote, setCityLote] = useState("");

  const [dateLote, setDateLote] = useState("");
  const [cropLote, setCropLote] = useState("");

  const [provinceLote, setProvinceLote] = useState("");
  const [countryLote, setCountryLote] = useState("");

  const navigate = useNavigate();

  const deleteTask = (id) => {
    setData(data.filter((dataa) => dataa.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // nameLote === "",
    //   fieldLote === "",
    //   locationLote === "",
    //   cityLote === "",
    //   dateLote === "",
    //   cropLote === "",
    // provinceLote === '',
    // countryLote === '',

    if ((nameLote === "", fieldLote === "", provinceLote === "")) {
      setCenteredModal(!centeredModal);
    } else {
      setData(
        data.concat({
          ...data,
          id: +new Date(),
          name: nameLote,
          field: fieldLote,
          location: locationLote,
          province: provinceLote,
          country: countryLote,
          city: cityLote,
          date: dateLote,
          crop: cropLote,
        })
      );

      setNameLote("");
      setFieldLote("");
      setLocationLote("");
      setCityLote("");
      setDateLote("");
      setCropLote("");
      setProvinceLote("");
      setCountryLote("");
      navigate("/home");
    }
  };

  return (
    <>
      <DataContext.Provider
        value={{
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
          countryLote,
          setCountryLote,
        }}
      >
        {children}
      </DataContext.Provider>

      {centeredModal ? (
        <Modal
          isOpen={centeredModal}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>Campos obligatorios</ModalHeader>
          <ModalBody>
            <h4>
              Para añadir un nuevo lote o editarlo, es necesario cumplir con
              todos los campos.
            </h4>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}
    </>
  );
}
