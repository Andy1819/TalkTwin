import { Box, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation } from '../../../service/api';

const Component = styled(Box)`
    display:flex;
    height:45px;
    padding: 13px 0;
    cursor: pointer;
`;

const Image = styled('img')({
    width:55,
    height: 55,
    borderRadius: '50%',
    padding: '0 15px'
})

const Conver = ({user}) => {

    const { setPerson, account} = useContext(AccountContext);

    const getuser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }

    return (
        <Component onClick={() => getuser()}>
            <Box>
                <Image src={user.picture} alt='dp' />
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Component>
    )
}

export default Conver;