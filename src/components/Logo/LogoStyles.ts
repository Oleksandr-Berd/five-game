import styled from "@emotion/styled";
import { ILogo } from "../../utils/interfaces";

export const LogoStyled = styled.div<ILogo>`
& > svg{
    width: ${props => props.location === "board" && "40px"};
    height: ${props => props.location === "board" && "40px"};
}
`