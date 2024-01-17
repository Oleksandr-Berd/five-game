import * as SC from './MainMenuStyles'

import Logo from "../Logo/Logo";
import NavBar from "../Navbar/NavBar";

const MainMenu:React.FC = () => {
    return ( <SC.MainMenuStyled>
        <Logo location='home'/>
        <NavBar/>
    </SC.MainMenuStyled> );
}
 
export default MainMenu;