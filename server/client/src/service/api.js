import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    }
    catch(error){
        console.log('Error while adding User ', error.message);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data;
    }
    catch(error){
        console.log(' Error while loading user ', error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    }
    catch(error){
        console.log(' Error while connecting for conversation b/w user and account ', error.message);
    }
}