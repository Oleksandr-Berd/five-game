import * as SC from './NavBarStyles'

import { NavLink } from "react-router-dom";
import { mainMenuBtn } from "../../db/db";

const NavBar: React.FC = () => {
  return (
    <nav>
      {mainMenuBtn.map(({ id, content, path }) => (
        <li key={id}>
          <SC.Link to={path}>{content}</SC.Link.Link>
        </li>
      ))}
    </nav>
  );
};

export default NavBar;
