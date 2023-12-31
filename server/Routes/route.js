import express from 'express';
import { addUser, getUsers } from '../controller/userController.js';
import { newConversation, getConversation } from '../controller/conversController.js';
import { newMessage, getmsg } from '../controller/messageController.js';

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getmsg);

export default route;