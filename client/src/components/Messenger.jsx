import { AppBar, Toolbar, styled, Box } from "@mui/material";

import Login from "./account/Login";

const Lbox = styled(Box)`
    height: 100vh;
    background-color: #D7A1F9;
    box-shadow: none; `

const Header = styled(AppBar)`
    height: 150px;
    background-color: black;
    box-shadow: none;
`
const Messenger = () => {

    return (
        <Lbox>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <Login />
        </Lbox>
    )
}

export default Messenger;