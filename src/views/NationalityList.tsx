import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListItem from "../components/ListItem";
import UserService, { Nationality } from "../services/UserService";


const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    align-self: center;
`;

const NationalityList = () => {

    const [nationalities, setNationalities] = useState<Nationality[]>([]);

    useEffect(() => {
        setNationalities(UserService.requestNationalities())
    }, [])

    const navigate = useNavigate();

    return (
        <ListContainer>
            {nationalities.map((nationality) => {
                return (
                    <ListItem onClick={() => navigate(`/${nationality.code}/users`)} key={nationality.flag}>
                        <b>{nationality.name}</b>
                        <img alt={nationality.name} src={nationality.flag}/>
                    </ListItem>
                )
            })}
        </ListContainer>
    );
}

export default NationalityList;