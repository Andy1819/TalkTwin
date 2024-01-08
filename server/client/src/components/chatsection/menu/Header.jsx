import { useContext, useState } from 'react';
import { Box, styled } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';


import Headermenu from './Headermenu';
import ChatIcon from '@mui/icons-material/Chat';
import Drawerinfo from '../../drawer/Drawerinfo';

const Component = styled(Box)`
    height: 44px;
    background: #D7A1F9;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    cursor:pointer;
    & > * {
        margin-left: 2px;
        padding: 8px;
        font-size: 30px;
    };
    & :first-child {
        margin-right: 16px;
        margin-top: 8px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor:'pointer'
})

const Header = () => {

    const { account } = useContext(AccountContext);

    const [ drawerOpen, setdrawerOpen ] = useState(false);

    const drawerToggle = () => {
        setdrawerOpen(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} alt='dp' onClick={() => drawerToggle()} />
                <Wrapper>
                    <ChatIcon />
                    <Headermenu  setdrawerOpen={setdrawerOpen} />
                </Wrapper>
                <Drawerinfo open={drawerOpen} setopen={setdrawerOpen} />
            </Component>
        </>
    )
}

export default Header;