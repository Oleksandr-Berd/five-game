import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Item = styled.li`

padding-top: 16px;
padding-bottom: 16px;
padding-left: 20px;
padding-right: 17px;

background-color: ${props => props.content?.includes("cpu") ? "#fd6687" : props.content?.includes("player") ? "#ffce67" : "#fff"};

&:not(:last-child){
    margin-bottom: 30px;
}
`

export const Link = styled(NavLink)`
color: ${props => props.content?.includes("cpu") ? "#fff" : "#000"}
`