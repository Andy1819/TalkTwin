import { Box } from '@mui/material';
import { useContext } from 'react';
import Chatheader from './Chatheader';
import Messages from './Messages';
import { AccountContext } from '../../../context/AccountProvider';


const Chatbox = () => {

    const { person } = useContext(AccountContext);
    return (
        <Box>
            <Chatheader person={person}/>
            <Messages person={person}/>
        </Box>
    )
}

export default Chatbox;