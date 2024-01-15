import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Item = styled.li`
&:not(:last-child){
    margin-bottom: 30px;
}
`

export const Link = styled(NavLink)``