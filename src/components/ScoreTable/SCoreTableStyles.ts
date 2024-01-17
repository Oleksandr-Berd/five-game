import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const Wrapper = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;

padding-left: 14px;
padding-right: 14px;

margin-bottom: 60px;
`

export const Item = styled.li<IStyles>`
position: relative;

 min-width: 142px;

padding-top: 10px;
padding-bottom: 10px;

text-align: center;

background-color: #fff;

border-radius: 20px;
border: 3px solid #000;
border-bottom: 10px solid #000;

&:first-of-type{
    &::before{
        content: url(${props => props.img});
        position: absolute;
        left: 0;
        top: 0;

        transform: translateX(-27px) translateY(11px);
    }
}

&:last-child{
    &::after{
        content: url(${props => props.img});
        position: absolute;
        right: 0;
        top: 0;

        transform: translateX(27px) translateY(11px);
    }
}

& >h3{
    font-size: 16px;
}

& > h4{
    font-size: 32px;
}
`