import { Box, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';


const Profilepic = styled(Box)`
    display:flex;
    justify-content:center;
`;

const Image = styled('img')({
    width:200,
    height:200,
    borderRadius: '50%',
    padding: '25px'
});

const Namedetails = styled(Box)`
    background:#fff;
    padding:12px 30px 2px;
    boxShadow: 0 1px 3px black;
    & : first-child{
        font-size:14px;
        color:#D7A1F9;
    }

    & : last-child{
        margin: 14px 0;
        color:black;
    }
`;

const DescriptionContainer = styled(Box)`
    & > p {
        background:black;
        color: #fff;
        font-size: 15px;
    }
`;

const Descdetails = styled(Typography)`
    padding:25px 0 25px 0;
`

const Profile = () => {

    const { account } = useContext(AccountContext);
    return (
        <>
            <Profilepic>
                <Image src={account.picture} alt='dp' />
            </Profilepic>
            <Namedetails>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Namedetails>

            <DescriptionContainer>
                <Descdetails>This name will be visible to your contacts and below is your profile description. What's your mood!!</Descdetails>
            </DescriptionContainer>

            <Namedetails>
                <Typography>About</Typography>
                <Typography>Gentlemen! Why are you so serious?</Typography>
            </Namedetails>
            <Box></Box>
        </>
    )
}

export default Profile;