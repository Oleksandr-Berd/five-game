import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { IStyles } from "../../utils/interfaces";

export const List =styled.nav`
`

export const Item = styled.li<IStyles>`

position: relative;

padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
padding-right: 17px;

background-color: ${props => props.content?.includes("cpu") ? "#fd6687" : props.content?.includes("player") ? "#ffce67" : "#fff"};

border-radius: 20px;

border-top: 3px solid #000;
border-bottom: 10px solid #000;
border-left: 3px solid #000;
border-right:3px solid #000;

&:not(:last-child){
    margin-bottom: 30px;
}

&::after{
    position: absolute;
    content: url(${props => props.img});
    right: 0;
    top: 0;

    transform: translateX(-17px) translateY(13px);

    height: 46px;
}
`

export const Link = styled(NavLink)`
text-transform: uppercase;

font-size: 24px;

color: ${props => props.content?.includes("cpu") ? "#fff" : "#000"}
`