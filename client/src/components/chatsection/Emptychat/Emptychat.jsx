import { Box, Typography, styled } from '@mui/material';


const emptyProfilePicture = 'https://img.freepik.com/free-psd/3d-render-digital-communication-background_23-2150762204.jpg?size=626&ext=jpg';

const Component = styled(Box)`
    background: #fff;
    padding: 30px 0;
    text-align: center;
    height:100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;

const Image = styled('img')({
    width:400,
    marginTop:100,
    borderRadius: '60% 40% 40% 25%'
});

const Title = styled(Typography)`
    font-size:32px;
    margin:20px 0 10px 0;
    font-family: cursive;
    font-weight:900;
    ${'' /* color:#fff; */}
`;

const Subtitle = styled(Typography)`
    font-size:20px;
    font-family:cursive;
    font-weight:500;
    ${'' /* color:#fff; */}
`;

const Emptychat = () => {
    return (
        <Component>
            <Container>
                <Image src={emptyProfilePicture} alt='logo'/>
                <Title>Talk Twin</Title>
                <Subtitle>Send and receive messages & connect with your closed ones online!!</Subtitle>
            </Container>
        </Component>
    )
}

export default Emptychat;