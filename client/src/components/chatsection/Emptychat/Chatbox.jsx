import { Box } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Chatheader from './Chatheader';
import Messages from './Messages';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';


const Chatbox = () => {

    const { person, account } = useContext(AccountContext);
    const [ conversation, setConversation ] = useState({});

    useEffect(() => {
        const getConverDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConverDetails();
    },[person.sub]);

    return (
        <Box>
            <Chatheader person={person}/>
            <Messages person={person} conversation={conversation}/>
        </Box>
    )
}

export default Chatbox;