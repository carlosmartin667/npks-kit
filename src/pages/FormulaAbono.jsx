import React, { useEffect } from "react";
import { ApiDefaultUsers } from "../api/indext";

const FormulaAbono = () => {
  const { PostUsersRegister } = ApiDefaultUsers();
  useEffect(() => {
   const x =  PostUsersRegister();
  }, []);
  return <h1>FormulaAbono test 2</h1>;
};

export default FormulaAbono;
