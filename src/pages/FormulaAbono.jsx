import React, { useEffect } from "react";
import { ApiDefaultUsers } from "../api/indext";

const FormulaAbono = () => {
  const { PostUsersRegister, PostUsersLogin , PostUsersEdit} = ApiDefaultUsers();
  useEffect(() => {
   const x = PostUsersLogin();
  }, []);
  return <h1>FormulaAbono test 2</h1>;
};

export default FormulaAbono;
