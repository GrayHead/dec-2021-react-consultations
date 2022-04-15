// const xxxx = " https://jsonplaceholder.typicode.com/users";
//
//
//
// const getUsers = () => {
//     return fetch(xxxx).then(value => value.json())
// }
// const getUser = (id) => {
//     return fetch(xxxx + '/' + id).then(value => value.json())
//
// }
//
// export {getUser, getUsers}
import axios from 'axios';


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {}
});

// const getUsers = () => {
//     return axiosInstance.get('').then(value => value.data);
// }

function getUsers() {
    return axiosInstance.get('').then(value => value.data);
}

const getUser = async (id) => {
    let {data} = await axiosInstance.get('/' + id);
    return data;
}

export {getUsers, getUser}
