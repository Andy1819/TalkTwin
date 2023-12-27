import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const UpperBox = styled(Box)`
    display: flex;
`;

const Container = styled(Box)`
padding: 50px 0 50px 50px;
`;

const Qrcode = styled('img')({
    height: 264,
    width: 264, 
    margin: '50px 0 0 50px'
});

const Title = styled(Typography)`
    font-size: 25px;
    color: #525252;
    font-weight: 500;
    font-family: inherit;
    margin-bottom: 30px;
`;

const StyleList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: purple;
    }
`

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Login = () => {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError = (res) => {
        console.log("Login Failed", res);
    }


    return (
        <Dialog
            open = {true}
            PaperProps ={{ sx: dialogStyle}}
            hideBackdrop={true}
            >
                <UpperBox>
                    <Container>
                    <Title>To use TalkTwin on your computer:</Title>
                    <StyleList>
                        <ListItem>1. Scan this code on your phone. </ListItem>
                        <ListItem>2. Link your device through your mail. </ListItem>
                        <ListItem>3. Authenticate your mail and you are set to go! </ListItem>
                    </StyleList>
                    </Container>

                    <Box style = {{ position: "relative"}}>
                        <Qrcode src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg" alt="QR_Code"></Qrcode>
                        <Box style = {{ position: "absolute", top: "50%", transform: "translateX(25%) translateY(-25%)"}}>
                            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}></GoogleLogin>
                        </Box>
                    </Box>
                </UpperBox>
            </Dialog>
    )
}

export default Login;