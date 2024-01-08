import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { useContext } from "react";
import Login from "./account/Login";
import Chat from "./chatsection/Chat";
import { AccountContext } from "../context/AccountProvider";

const Lbox = styled(Box)`
    height: 100vh;
    background-color: #D7A1F9;
    box-shadow: none; 
`

const Header = styled(AppBar)`
    height: 120px;
    background-color: black;
    box-shadow: none;
`

const LoginHeader = styled(AppBar)`
    height: 150px;
    background-color: black;
    box-shadow: none;
`
const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Lbox>
        {
            account ? 
            <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <Chat />
            </>
            :

            <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <Login />
            </>
        }
        </Lbox>
    )
}

export default Messenger;