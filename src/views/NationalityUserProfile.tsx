import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    flex: 1;
    width: 100%;
    align-self: center;
`;

const ProfileHeaderContainer = styled.div`
    display: flex;
    flex: 0.35;
    background-color: ghostwhite;
    border-bottom-width: 0.1px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-style: solid;
    border-color: grey;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 56px;
`;

const UserPhoto = styled.img`
    border-radius: 112px;
    position: absolute;
    top: 110px;
`;

const UserTitle = styled.p`
    color: grey;
    font-size: 1.3rem;
    font-weight: 400;
`;

const NationalityUserProfile = () => {
    const location = useLocation();
    console.log(location)
    return (
        <ProfileContainer>
            <ProfileHeaderContainer>
                <UserPhoto src={location.state.user.picture.large}/>
            </ProfileHeaderContainer>
            <UserTitle>Hi, My name is</UserTitle>
            <h4>{location.state.user.name.first} {location.state.user.name.last}</h4>
        </ProfileContainer>
    )
}

export default NationalityUserProfile;