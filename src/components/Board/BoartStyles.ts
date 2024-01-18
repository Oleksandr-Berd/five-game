import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const BoardStyled = styled.div`
position: relative;

padding-top: 50px;
padding-left: 20px;
padding-right: 20px;

margin-left: auto;
margin-right: auto;

text-align: center;
`

export const PlayBoard = styled.div<IStyles>`
position: relative;

width: 335px;
height: 310px;

margin-left: auto;
margin-right: auto;

background-image: url(${props => props.img2}), url(${props => props.img});

border-bottom: 10px solid #000;

border-radius: 20px;
`
