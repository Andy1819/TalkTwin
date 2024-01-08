import { Dialog, Box, styled } from "@mui/material";
import { useContext } from "react";
import Menu from "./menu/Menu";
import Emptychat from "./Emptychat/Emptychat";
import Chatbox from "./Emptychat/Chatbox";
import { AccountContext } from "../../context/AccountProvider";


const Component = styled(Box)`
    display:flex;
`
const Leftsect = styled(Box)`
    min-width:450px;
`

const Rightsect = styled(Box)`
    width: 75%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid black;
`

const dialogStyle = {
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '95%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Chat = () => {

    const { person } = useContext(AccountContext);

    return (
        <Dialog
            open = {true}
            PaperProps ={{ sx: dialogStyle}}
            hideBackdrop={true}
            maxWidth={'md'}
        >

            <Component>
                <Leftsect>
                    <Menu />
                </Leftsect>
                <Rightsect>
                    {Object.keys(person).length ? <Chatbox /> : <Emptychat />}
                </Rightsect>
            </Component>

        </Dialog>
    )
}

export default Chat;