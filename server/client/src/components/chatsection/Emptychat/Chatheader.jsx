import { Box, Typography, styled } from '@mui/material';
import { Search, UnfoldMoreOutlined } from '@mui/icons-material';

const profilePicture = 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';

const Header = styled(Box)`
    height: 86px;
    background: #D7A1F9;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img') ({
    height: 60,
    width: 60,
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
    font-size:22px;
`;

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 16px;
`;

const Rightcontaines = styled(Box)`
    margin-left: auto;
    & > svg{
        padding: 8px;
        font-size:30px;
    }
`;


const Chatheader = ({person}) => {
    return (
        <Header>
            <Image src={person.picture} alt='dp' />
            <Box>
                <Name>{person.name}</Name>
                <Status>Online</Status>
            </Box>
            <Rightcontaines>
                <Search />
                <UnfoldMoreOutlined />
            </Rightcontaines>
        </Header>
    )
}

export default Chatheader;