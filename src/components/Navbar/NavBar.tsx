import * as SC from './NavBarStyles'

import { mainMenuBtn } from "../../db/db";
import NavBarItem from './NavBarItem';

const NavBar: React.FC = () => {
  return (
    <nav>
      {mainMenuBtn.map(({ id, content, path }) => (
       <NavBarItem key={id} content={content} path={path}/>
      ))}
    </nav>
  );
};

export default NavBar;
