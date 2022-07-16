import axios from "axios";
export const ApiDefaultUsers = () => {
    const url = "http://127.0.0.1:5000/api/"

    const PostUsersRegister = () => {
        axios
            .post(url + "users/register", {
                username: "Martin3",
                email: "Martin3@gmai.com",
                password: "123456",
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return { PostUsersRegister };
}