import * as SC from './NavBarStyles'

const NavBarItem:React.FC = ({id, content, path}) => {
    return ( <SC.Item>
        <SC.Link to={path}>{content}</SC.Link>
    </SC.Item> );
}
 
export default NavBarItem;