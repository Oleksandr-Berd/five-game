import * as SC from './LogoStyles'

import {ReactComponent as LogoSvg} from '../../assets/images/logo.svg'
import { ILogo } from '../../utils/interfaces';

const Logo:React.FC<ILogo> = ({location}) => {
    return ( <SC.LogoStyled location={location}>
        <LogoSvg/>
    </SC.LogoStyled> );
}
 
export default Logo;