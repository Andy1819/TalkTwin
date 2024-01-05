import { Box, InputBase, styled } from '@mui/material';
import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material';

const Container = styled(Box)`
    height:40px;
    background: #fff;
    display:flex;
    width:100%;
    align-items:center;
    padding: 0 15px;
    & > * { margin: 5px;}
`;

const Search = styled(Box)`
background-color: #f0f2f5;
border-radius: 10px;
width:calc(94% - 100px);
`;

const Inputfield = styled(InputBase)`
    width:100%;
    padding:20px;
    height:10px;
    padding-left: 30px;
    font-size: 16px;
`;

const Footer = () => {
    return(
        <Container>
            <EmojiEmotionsOutlined />
            <AttachFile />
            <Search>
                <Inputfield 
                    placeholder='Write here...'
                />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer;