import { useLocation } from "react-router-dom";
import _ from "lodash";
import styled, { css, keyframes } from "styled-components";
import { FiUser, FiMail, FiCalendar, FiMap, FiPhone, FiLock } from "react-icons/fi";
import { useState } from "react";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    flex: 1;
    width: 100%;
    align-self: center;
    align-items: center;
`;

const ProfileHeaderContainer = styled.div`
    display: flex;
    flex: 0.35;
    width: 100%;
    background-color: snow;
    border-bottom-width: 2px;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-style: solid;
    border-color: lightgrey;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 48px;
`;

const UserPhotoRoundedContainer = styled.div`
    border-radius: 112px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 2px;
    border-style: solid;
    border-color: lightgrey;
    position: absolute;
    margin-bottom: -58px;    
`;

const UserPhoto = styled.img`
    border-radius: 112px;
`;

const showKeyframe = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const InfoSection = styled.div`
    min-height: 15vh;
    padding: 0 48px 0 48px;
    animation: ${showKeyframe} 0.3s;
`;

const UserTitle = styled.p`
    color: grey;
    font-size: 1.3rem;
    font-weight: 400;
`;

const UserInfo = styled.h5`
    margin: 0;
`;

const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
`;

const hoverAnimation = keyframes`
    50%{
        color: grey;
        transform: translateY(30px);
    }
    100%{
        color: yellowgreen;
        transform: translateY(0);
    }
`;


const IconHoverWrapper = styled.div<{spaced: boolean, active?: boolean}>`
    padding: 16px;
    color: lightgrey;
    ${({active}) => active && css`
        color: yellowgreen;
    `}
    &:hover{
        animation: ${hoverAnimation} 0.3s;
    }
`;


const NationalityUserProfile = () => {
    const location = useLocation();

    const [icons, setIcons] = useState(
        [
            {name: "user", active: true,  component: FiUser, message: "Hi, My name is", datapath: ["name.first", "name.last"]},
            {name: "mail", active: false, component: FiMail, message: "My email address is", datapath: ["email"]},
            {name: "calendar", active: false, component: FiCalendar, message: "My birthday is", datapath: ["dob.date"], isDate: true},
            {name: "map", active: false, component: FiMap, message: "My address is", datapath: ["location.street.name", "location.street.number", "location.city", "location.state", "location.country"]},
            {name: "phone", active: false, component: FiPhone, message: "My phone is", datapath: ["phone"]},
            {name: "password", active: false, component: FiLock, message: "My password is", datapath: ["login.password"]},
        
        ]
    );

    const activeInfo = icons.find((icon) => icon.active === true);

    const title = activeInfo?.message;

    const info = activeInfo?.datapath.map((path) => {
        const pathdata = _.get(location.state.user, path);
        if (activeInfo.isDate) {
            return new Date(pathdata).toLocaleDateString();
        }
        return pathdata;
    }).join(" ")

    return (
        <ProfileContainer>
            <ProfileHeaderContainer>
                <UserPhotoRoundedContainer>
                    <UserPhoto width={145} height={145} src={location.state.user.picture.large}/>
                </UserPhotoRoundedContainer>
            </ProfileHeaderContainer>
            <InfoSection>
                <UserTitle>{title}</UserTitle>
                <UserInfo>{info}</UserInfo>
            </InfoSection>
            <ButtonBar>
                {icons.map((icon, index) => {
                    return (
                        <IconHoverWrapper key={icon.name} active={icon.active} spaced={index < icons.length - 1} onMouseOver={() => {
                            setIcons(icons.map((_icon) => {
                                if (_icon.name === icon.name) {
                                    return {..._icon, active: true}
                                }
                                return {..._icon, active: false}
                            }))
                        }} >
                            <icon.component 
                                // size={icon.active ? 40 : 25} 
                                // color={icon.active ? "darkolivegreen": "grey"}
                            />
                        </IconHoverWrapper>
                    )
                })}
            </ButtonBar>
        </ProfileContainer>
    )
}

export default NationalityUserProfile;