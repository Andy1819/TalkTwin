import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from '@mui/material';
import Conver from "./Conver";
import { AccountContext } from "../../../context/AccountProvider"

const Component = styled(Box)`
    height:81vh;
    overflow: overlay;
`;

const Dividerr = styled(Divider)`
    margin: 0 0 0 70px;
`

const Conversation = ({text}) => {

    const [users, setUsers] = useState([]);

    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchdata = async() => {
            let response = await getUsers();
            const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchdata();
    },[text]);

    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conver user={user}/>
                        <Dividerr />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversation;