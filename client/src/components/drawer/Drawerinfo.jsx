import { Drawer, Box, Typography, styled } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Profile from './Profile';

const Header = styled(Box)`
    background:black;
    height:103px;
    color:#fff;
    display: flex;
    & > svg, & > p{
        margin-top:auto;
        padding:15px;
    }
`
const Component = styled(Box)`
    background:#D7A1F9;
    height:85%;
`
const Text = styled(Typography)`
    font-size: 22px;
`

const drawerstyle = {
    left: 32,
    top:17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const Drawerinfo = ({ open, setopen }) => {

    const handleClose = () => {
        setopen(false);
    }
    return (
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{sx: drawerstyle}}
        style={{zIndex: 1500}}
        >

            <Header>
                <ArrowCircleLeftIcon style={{ cursor: 'pointer' }} onClick={() => setopen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>

        </Drawer>
    )
}

export default Drawerinfo;