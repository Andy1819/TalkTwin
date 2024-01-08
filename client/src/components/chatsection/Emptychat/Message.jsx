import { Box, Typography, styled } from '@mui/material';
import { formatDate } from '../../../utils/common-utils';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';

const Sendermsg = styled (Box)`
    background:#fff;
    max-width:60%;
    margin-left:auto;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Receivermsg = styled (Box)`
    background:#D7A1F9;
    max-width:60%;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size:16px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size:14px;
    color:grey;
    margin-top:6px;
    word-break:keep-all;
    margin-top:auto;
`;

const Message = ({message}) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Sendermsg>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Sendermsg>
                :
                    <Receivermsg>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Receivermsg>
            }
        </>
    )
}

export default Message;