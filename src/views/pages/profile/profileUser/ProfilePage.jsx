import React, { useState, useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
  Table,
  Form,
  Label,
  Input,
} from "reactstrap";

import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

import avatar from "../../../../assets/images/portrait/small/avatar-s-1.jpg";

// ** import DataContext
import { DataContext } from "../../../../utility/context/LoteProvider";

const ProfilePage = () => {
  const {
    nombre,
    setNombre,
    nombreUsuario,
    setNombreUsuario,
    localidadUser,
    setLocalidadUser,
  } = useContext(DataContext);

  const [settingProfile, setSettingProfile] = useState(false);
  const [settingPassword, setSettingPassword] = useState(false);

  return (
    <>
      <Row className="p-1 h-100">
        <Col md={settingProfile ? "4" : "12"} sm="12" className="p-1">
          <Card>
            <CardHeader className="d-flex flex-column align-items-center justify-content-start">
              <img
                src={avatar}
                alt={"avatar user profile"}
                width={130}
                height={130}
                className="rounded-circle"
              />
              <CardTitle tag="h5" className="mt-1">
                {nombreUsuario}
              </CardTitle>
            </CardHeader>

            <hr />

            <CardBody className="pb-2 d-flex flex-column align-items-start justify-content-start">
              <CardText>
                <span className="fs-6">Nombre:</span>
                <div className="d-flex align-items-center">
                  <FiUser className="me-1 text-primary" />
                  {nombre}
                </div>
              </CardText>

              <CardText>
                <span className="fs-6">Email:</span>
                <div className="d-flex align-items-center">
                  <AiOutlineMail className="me-1 text-primary" />
                  martinnutrixya@gmail.com
                </div>
              </CardText>

              <CardText>
                <span className="fs-6">Localidad:</span>
                <div className="d-flex align-items-center">
                  <HiOutlineLocationMarker className="me-1 text-primary" />
                  {localidadUser}
                </div>
              </CardText>

              <Button
                color="primary"
                outline
                block
                className="mt-2"
                onClick={(e) => {
                  e.preventDefault(), setSettingProfile(!settingProfile);
                }}
              >
                Editar perfil
              </Button>
            </CardBody>
          </Card>
        </Col>

        {settingProfile ? (
          <>
            <Col md="8" sm="12" className="p-3">
              <h3 className="mb-3">Edita tu perfil</h3>

              <Form>
                <Row>
                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" htmlFor="name">
                      Nombre
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Martin"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </Col>

                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" htmlFor="name">
                      Nombre de usuario
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Martin-Nutrixya"
                      value={nombreUsuario}
                      onChange={(e) => setNombreUsuario(e.target.value)}
                    />
                  </Col>

                  <Col md="6" sm="12" className="mb-1">
                    <Label className="form-label" for="amountOfHectarea">
                      Localidad
                    </Label>
                    <Input
                      type="text"
                      name="amountOfHectarea"
                      id="amountOfHectarea"
                      placeholder="Villa María"
                      value={localidadUser}
                      onChange={(e) => setLocalidadUser(e.target.value)}
                    />
                  </Col>
                </Row>

                <Row>
                  {settingPassword !== true ? (
                    <Col md="6" sm="12">
                      <Button
                        className="mt-2"
                        color="primary"
                        outline
                        block
                        onClick={(e) => {
                          e.preventDefault(), setSettingPassword(true);
                        }}
                      >
                        ¿Cambiar contraseña?
                      </Button>
                    </Col>
                  ) : null}

                  {settingPassword ? (
                    <>
                      <hr className="my-1" />

                      <Col md="6" sm="12">
                        <Label className="form-label" for="amountOfHectarea">
                          Nueva contraseña
                        </Label>

                        <Input
                          type="password"
                          name="amountOfHectarea"
                          id="amountOfHectarea"
                          placeholder="Nueva contraseña"
                        />
                      </Col>

                      <Col md="6" sm="12">
                        <Label className="form-label" for="amountOfHectarea">
                          Repetir nueva contraseña
                        </Label>

                        <Input
                          type="password"
                          name="amountOfHectarea"
                          id="amountOfHectarea"
                          placeholder="Repetir nueva contraseña"
                        />
                      </Col>
                    </>
                  ) : null}
                </Row>

                <div className="d-flex justify-content-end mt-1">
                  <Button
                    className="btn btn-primary ms-2"
                    color="primary"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault(), setSettingProfile(!settingProfile);
                    }}
                  >
                    Guardar
                  </Button>
                </div>
              </Form>
            </Col>
          </>
        ) : null}
      </Row>
    </>
  );
};

export default ProfilePage;
