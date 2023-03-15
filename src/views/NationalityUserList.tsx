import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListItem from "../components/ListItem";
import UserService, { NationalityCode } from '../services/UserService';

type User = {
    id: {value: string}
    name: {first: string, last: string}
    picture: {medium: string}
    login: {uuid: string}
}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    flex: 1;
    justify-content: space-between;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NationalityUserList = () => {
    const { nationality } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (nationality){
          UserService.requestUsersByNationality(nationality as NationalityCode).then((users) => {
            setUsers(users);
          })
        }
    }, [nationality])

    const nationalityInfo = UserService.requestNationalityByCode(nationality as NationalityCode);

    return (
        <ListContainer>
                <HeaderContainer>   
                    <img alt={nationalityInfo?.name+' Flag'} width={80} height={80} src={nationalityInfo?.flag}/>
                    <h2>Users</h2>
                </HeaderContainer>
               {users.map((user: User) => {
                return (
                    <ListItem onClick={() => navigate(`/users/${user.login.uuid}`, {state: {user}})} key={user.login.uuid}>
                      <img alt={user.name.first+user.name.last} src={user.picture.medium }/>
                      <h5>{user.name.first} {user.name.last}</h5>
                    </ListItem>
                )
            })}
        </ListContainer>
    );
}

export default NationalityUserList;