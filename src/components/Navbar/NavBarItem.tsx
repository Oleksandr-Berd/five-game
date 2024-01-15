import { INav } from '../../utils/interfaces';
import * as SC from './NavBarStyles'

const NavBarItem:React.FC<INav> = ({ content, path}) => {


    return ( <SC.Item content={content}>
        <SC.Link content={content} to={path}>{content}</SC.Link>
    </SC.Item> );
}
 
export default NavBarItem;