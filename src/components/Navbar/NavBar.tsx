import * as SC from './NavBarStyles'

import { mainMenuBtn } from "../../db/db";
import NavBarItem from './NavBarItem';

const NavBar: React.FC = () => {
  return (
    <SC.List>
      {mainMenuBtn.map(({ id, content, path }) => (
       <NavBarItem key={id} content={content} path={path}/>
      ))}
    </SC.List>
  );
};

export default NavBar;
