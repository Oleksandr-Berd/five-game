import * as SC from './NavBarStyles'

import { INav } from '../../utils/interfaces';

import playerCpu from '../../assets/images/player-vs-cpu.svg'
import playerPlayer from '../../assets/images/player-vs-player.svg'

const NavBarItem:React.FC<INav> = ({ content, path}) => {


    return ( <SC.Item content={content} img={content.includes("cpu") ? playerCpu : content.includes("player") ? playerPlayer : null}>
        <SC.Link content={content} to={path}>{content}</SC.Link>
    </SC.Item> );
}
 
export default NavBarItem;