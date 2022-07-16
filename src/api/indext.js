import axios from "axios";
export const ApiDefaultUsers = () => {
    const url = "http://127.0.0.1:5000/api/";
    const id = 0;
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
    const PostUsersLogin =  () => {
        const resultado =  axios.post(url + "users/login", {
            email: "carlos@gmail.com",
            password: "123456"
        }).then(function (response) {
           return(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    const PostUsersEdit = () => {
        console.log("PostUsersEdit");
        console.log(token);
        axios.post(url + "users/edit", {
            userID: id,
            username: "Dragon",
            email: "carlos@gmail.com"
        }, {
            headers: {
                'Authorization': token
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return { PostUsersRegister, PostUsersLogin, PostUsersEdit };
}