import * as SC from './ButtonStyles'

import { IButton } from "../../utils/interfaces";

const Button:React.FC<IButton> = ({handler, content}) => {
    return ( <SC.ButtonStyled onClick={handler}>
        {content}
    </SC.ButtonStyled> );
}
 
export default Button;