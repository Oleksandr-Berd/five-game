import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const PlayBoard = styled.ul<IStyles>`

width: 335px;
height: 310px;

margin-left: auto;
margin-right: auto;

background-image: url(${props => props.img2}), url(${props => props.img});

border-bottom: 10px solid #000;

border-radius: 20px;
`

export const Matrix = styled.ul`
padding-top: 11px;
padding-bottom: 32px;
padding-left: 11px;
padding-right: 11px;
`

export const Row = styled.ul`
display: flex;
flex-direction: row;
align-items: center;


&:not(:last-child){
    margin-bottom: 13px;
}
`

export const Cell = styled.li<IStyles>`
width: 34px;
height: 34px;

background-image: url(${props => props.img});
background-size: cover;

border: none;
border-radius: 50%;

&:not(:last-child){
    margin-right: 12.72px;
}
`