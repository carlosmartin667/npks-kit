import React, { useEffect } from "react";
import { ApiDefaultUsers } from "../api/indext";

const FormulaAbono = () => {
  const { PostUsersRegister, PostUsersLogin, PostUsersEdit } =
    ApiDefaultUsers();

  const TestPostUsersLogin = async () => {
    const email = "carlos@gmail.com";
    const password = "123456";

    const resultado = await PostUsersLogin(email, password);

    if (!resultado) {
      console.log("Error");
    } else {
      const { data } = resultado;
      console.log(data);
      console.log("fin de la ejecucion");

      const resultadoEdit = await PostUsersEdit(
        data._id,
        "dragon2",
        email,
        data.token
      );
      
    }
  };
  useEffect(() => {
    TestPostUsersLogin();
  }, []);
  return <h1>FormulaAbono test 2</h1>;
};

export default FormulaAbono;
