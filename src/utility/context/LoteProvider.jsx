import React, { createContext, useEffect, useState } from "react";

// ** Import navigate from react-router-dom
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const DataContext = createContext();

const DataLoteYManejo = [
  {
    id: 2,
    name: "Lote 1",
    field: "San Antonio",
    amountOfHectarea: null,
    location: "Villa María",
    province: "Córdoba",
    crop: "Maíz",
    date: "2023-09-11",
    cropUp: true,
  },
  {
    id: 3,
    name: "Lote 2",
    field: "Las Catitas",
    amountOfHectarea: null,
    location: "Pasco",
    province: "Córdoba",
  },
];

export default function LoteProvider({ children }) {
  // ** import navigate from "react-router-dom"
  const navigate = useNavigate();

  // ** State Cultivo
  const [dateCultivo, setDateCultivo] = useState("");
  const [cropCultivo, setCropCultivo] = useState("Maíz grano");

  // ** State Otro Arrancador
  const [contenidoNitrogeno, setContenidoNitrogeno] = useState("");
  const [contenidoFosforo, setContenidoFosforo] = useState("");
  const [contenidoPotasio, setContenidoPotasio] = useState("");
  const [contenidoAzufre, setContenidoAzufre] = useState("");

  const [eficienciasNitrogeno, setEficienciasNitrogeno] = useState("");
  const [eficienciasFosforo, setEficienciasFosforo] = useState("");
  const [eficienciasPotasio, setEficienciasPotasio] = useState("");
  const [eficienciasAzufre, setEficienciasAzufre] = useState("");

  // ** State setting acount profile
  const [nombre, setNombre] = useState("Martín");
  const [nombreUsuario, setNombreUsuario] = useState("Martín-Nutrixya");
  const [localidadUser, setLocalidadUser] = useState("Villa María");

  // ** State modal Account
  const [centeredModal, setCenteredModal] = useState(false);
  const [backModal, setBackModal] = useState(false);
  const [deleteLoteModal, setDeleteLoteModal] = useState(false);

  // ** Initial state
  const [data, setData] = useState(DataLoteYManejo);

  const [dataForm, setDataForm] = useState({
    id: null,
    name: "",
    field: "",
    amountOfHectarea: "",
    location: "",
    province: "",
    crop: "Maíz grano",
    date: "",
    cropUp: true,
  });

  const [dataToEdit, setDataToEdit] = useState(null);
  const [addRecomendacion, setAddRecomendacion] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setDataForm({
      ...dataForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      dataForm.name !== "" &&
      dataForm.field !== "" &&
      dataForm.amountOfHectarea !== "" &&
      dataForm.location !== "" &&
      dataForm.province !== ""
    ) {
      if (dataForm.id === null) {
        createData(dataForm);
        setDataForm({
          id: null,
          name: "",
          field: "",
          amountOfHectarea: "",
          location: "",
          province: "",
        });
      } else {
        updateData(dataForm);
        setDataForm({
          id: null,
          name: "",
          field: "",
          amountOfHectarea: "",
          location: "",
          province: "",
        });
      }
    } else {
      setCenteredModal(!centeredModal);
    }
  };

  const handleWizard = (e) => {
    e.preventDefault();

    addRecomendacionLote(dataForm);

    navigate("/");
  };

  // setDataForm({
  //       id: null,
  //       name: "",
  //       field: "",
  //       amountOfHectarea: "",
  //       location: "",
  //       province: "",
  //       crop: "",
  //       date: "",
  //       cropUp: true,
  //     }

  const createData = (dato) => {
    dato.id = +new Date();
    setData([...data, dato]);

    navigate("/");
  };

  const updateData = (dato) => {
    let newDataLote = data.map((el) => (el.id === dato.id ? dato : el));
    setData(newDataLote);
    navigate("/");
  };

  const deleteData = (id) => {
    alert("ELIMINAR LOTE con ID: " + id);
    setData(data.filter((dato) => dato.id !== id));
  };

  const addRecomendacionLote = (dato) => {
    let newDataLote = data.map((el) => (el.id === dato.id ? dato : el));
    setData(newDataLote);
  };

  useEffect(() => {
    if (dataToEdit) {
      setDataForm(dataToEdit);
    } else {
      setDataForm({
        id: null,
        name: "",
        field: "",
        amountOfHectarea: "",
        location: "",
        province: "",
      });
    }
  }, [dataToEdit]);

  useEffect(() => {
    if (addRecomendacion) {
      setDataForm(addRecomendacion);
    } else {
      setDataForm({
        id: null,
        name: "",
        field: "",
        amountOfHectarea: "",
        location: "",
        province: "",
        crop: "",
        date: "",
        cropUp: "",
      });
    }
  }, [addRecomendacion]);

  return (
    <>
      <DataContext.Provider
        value={{
          // State global
          dataForm,
          handleChange,
          handleSubmit,
          deleteData,
          setData,
          data,
          setDataToEdit,
          dataToEdit,
          setAddRecomendacion,
          backModal,
          setBackModal,
          handleWizard,
          // State cultivo
          setDateCultivo,
          setCropCultivo,
          // State arrancador
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
          // ** State setting acount profile
          nombre,
          setNombre,
          nombreUsuario,
          setNombreUsuario,
          localidadUser,
          setLocalidadUser,
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
            <h4>Es necesario completar todos los campos para Guardar</h4>
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

      {backModal ? (
        <Modal
          isOpen={backModal}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>¡Atención!</ModalHeader>
          <ModalBody>
            <h4>No se guardarán los cambios</h4>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setBackModal(!backModal)}>
              Cancelar
            </Button>
            <Button
              color="danger"
              onClick={() => {
                setBackModal(!backModal);
                setDataForm({
                  id: null,
                  name: "",
                  field: "",
                  amountOfHectarea: "",
                  location: "",
                  province: "",
                });
                navigate("/");
              }}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </Modal>
      ) : null}
    </>
  );
}
