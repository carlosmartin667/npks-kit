import React, { createContext, useEffect, useState } from "react";

// ** Import navigate from react-router-dom
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const DataContext = createContext();

const DataLoteYManejo = [
  // {
  //   id: 1,
  //   name: "+ Lote",
  //   field: null,
  //   amountOfHectarea: null,
  //   location: null,
  //   province: null,
  //   performSowing: true,
  //   predecessorCrop: null,
  //   cropYield: null,
  //   elapsedTime: null,
  // },
  {
    id: 2,
    name: "Lote 1",
    field: "Gastaldi",
    amountOfHectarea: null,
    location: "Villa María",
    province: "Córdoba",
    performSowing: true,
    predecessorCrop: null,
    cropYield: null,
    elapsedTime: null,
    date: "15/12/2022",
    crop: "Maíz",
    cropUp: true,
  },
  {
    id: 3,
    name: "Lote 2",
    field: "Aleman",
    amountOfHectarea: null,
    location: "Pasco",
    province: "Córdoba",
    performSowing: true,
    predecessorCrop: null,
    cropYield: null,
    elapsedTime: null,
  },
];

export default function LoteProvider({ children }) {
  // ** import navigate from "react-router-dom"
  const navigate = useNavigate();

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
    performSowing: true,
    predecessorCrop: "",
    cropYield: "",
    elapsedTime: "",
    date: "",
    crop: "",
  });

  const [dataToEdit, setDataToEdit] = useState(null);

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
      dataForm.province !== "" &&
      dataForm.predecessorCrop !== "" &&
      dataForm.cropYield !== "" &&
      dataForm.elapsedTime !== ""
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
          performSowing: true,
          predecessorCrop: "",
          cropYield: "",
          elapsedTime: "",
          date: "",
          crop: "",
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
          performSowing: true,
          predecessorCrop: "",
          cropYield: "",
          elapsedTime: "",
          date: "",
          crop: "",
        });
      }
    } else {
      setCenteredModal(!centeredModal);
    }
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
        performSowing: true,
        predecessorCrop: "",
        cropYield: "",
        elapsedTime: "",
        date: "",
        crop: "",
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
              Canselar
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
                  performSowing: true,
                  predecessorCrop: "",
                  cropYield: "",
                  elapsedTime: "",
                  date: "",
                  crop: "",
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
