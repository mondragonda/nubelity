import styled from "styled-components";

const ListItem = styled(styled.div``)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: lightgray;
      border-color: black;
      border-width: 22px;
    }
    border-radius: 5px;
`;

export default ListItem;