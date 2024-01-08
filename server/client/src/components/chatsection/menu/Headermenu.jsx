
import { useState } from 'react';
import { Menu, MenuItem, styled } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const Menuopt = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
`;

const Headermenu = ({ setdrawerOpen }) => {

    const [ open, setOpen ] = useState(null);

    const handleOpen = (e) => {
        setOpen(e.currentTarget);
    }

    const handleClose = () => {
        setOpen(null);
    }

    return (
        <>
            <UnfoldMoreIcon onClick={handleOpen}/>
            <Menu
            anchorEl={open}
            keepMounted
            open={open}
            onClose={handleClose}
            getContextAnchorE1={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
            transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
        >
            <Menuopt onClick={() => {handleClose(); setdrawerOpen(true); }}>Profile</Menuopt>
        </Menu>
        </>
    )
}

export default Headermenu;