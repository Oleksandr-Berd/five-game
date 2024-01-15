import * as SC from './SharedLayoutStyles'

type Props ={
    children: React.ReactNode
}

const SharedLayout:React.FC<Props> = ({children}) => {
    return ( <SC.SharedLayoutStyled>
        {children}
    </SC.SharedLayoutStyled> );
}
 
export default SharedLayout;