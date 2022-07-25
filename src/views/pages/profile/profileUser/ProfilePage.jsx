import React from "react";
import { CardText } from "reactstrap";
import avatar from "../../../../assets/images/portrait/small/avatar-s-1.jpg";

const ProfilePage = () => {
  return (
    <>
      <div className="w-100 p3 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center">
          <img
            src={avatar}
            alt={"avatar user profile"}
            width={130}
            height={130}
            className="rounded-circle me-2"
          />
          <div className="d-flex flex-column gap-15-styles">
            <CardText className="fs-2 fw-bolder margin-none-styles">
              Pepito-NPKS
            </CardText>
            <CardText>pepito-npks@gmail.com</CardText>
          </div>
        </div>
      </div>
      <div>CAMPOS PARA EDITAR PERFIL*</div>
    </>
  );
};

export default ProfilePage;
