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

  // ** State Otro Arrancador
  const [isCompleteArrancador, setIsCompleteArrancador] = useState(false);

  const [contenidoNitrogeno, setContenidoNitrogeno] = useState("");
  const [contenidoFosforo, setContenidoFosforo] = useState("");
  const [contenidoPotasio, setContenidoPotasio] = useState("");
  const [contenidoAzufre, setContenidoAzufre] = useState("");

  const [eficienciasNitrogeno, setEficienciasNitrogeno] = useState("");
  const [eficienciasFosforo, setEficienciasFosforo] = useState("");
  const [eficienciasPotasio, setEficienciasPotasio] = useState("");
  const [eficienciasAzufre, setEficienciasAzufre] = useState("");

  const handleCompleteArrancador = () => {
    setIsCompleteArrancador(!isCompleteArrancador);
  };

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

    alert("SI FUNCAAA");
  };

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

  return (
    <>
      <DataContext.Provider
        value={{
          dataForm,
          handleChange,
          handleSubmit,
          deleteData,
          setData,
          data,
          setDataToEdit,
          dataToEdit,
          backModal,
          setBackModal,
          handleWizard,
          // State arrancador
          handleCompleteArrancador,
          isCompleteArrancador,
          setIsCompleteArrancador,
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
