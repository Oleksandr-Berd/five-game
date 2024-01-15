import * as SC from './MainMenuStyles'

import Logo from "../Logo/Logo";
import NavBar from "../Navbar/NavBar";

const MainMenu:React.FC = () => {
    return ( <SC.MainMenuStyled>
        <Logo/>
        <NavBar/>
    </SC.MainMenuStyled> );
}
 
export default MainMenu;