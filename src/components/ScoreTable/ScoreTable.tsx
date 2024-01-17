import playerTwo from '../../assets/images/player-two.svg'
import playerOne from '../../assets/images/player-one.svg'

import * as SC from './SCoreTableStyles'

const ScoreTable:React.FC = () => {
    return ( <SC.Wrapper>
        <SC.Item img={playerOne}>
            <h3>#</h3>
            <h4>#</h4>
        </SC.Item>
        <SC.Item img={playerTwo}>
            <h3>#</h3>
            <h4>#</h4>
        </SC.Item>
    </SC.Wrapper> );
}
 
export default ScoreTable;