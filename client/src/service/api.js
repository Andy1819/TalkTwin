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

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(' Error while getting conversation b/w user and account ', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    }
    catch(error){
        console.log(' Error while calling newmessage api ', error.message);
    }
}

export const getMsgs = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(' Error while getting messages api ', error.message);
    }
}