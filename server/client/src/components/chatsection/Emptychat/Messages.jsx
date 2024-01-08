import { Box, styled } from '@mui/material';
import Footer from './Footer';

const Wrapper = styled(Box)`
    background-image: url(${'https://i.pinimg.com/1200x/26/88/9f/26889fb85cb76049f09b4ca91ef42a4d.jpg'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 74vh;
    overflow-y:scroll;
`;

const Messages = () => {
    return (
        <Wrapper>
            <Component></Component>
            <Footer />
        </Wrapper>
    )
}

export default Messages;