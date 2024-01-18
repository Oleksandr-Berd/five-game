import playerTwo from '../../assets/images/player-two.svg'
import playerOne from '../../assets/images/player-one.svg'
import cpu from '../../assets/images/cpu.svg'

import * as SC from './SCoreTableStyles'
import { IMode } from '../../utils/interfaces';

const ScoreTable:React.FC<IMode> = ({mode}) => {

const leftPlayer = mode === "player" ? "player 1" : "you";
const rightPlayer = mode === "player" ? "player 2" : "cpu";
const imgRightPlayer = mode === "player" ? playerTwo : cpu

    return ( <SC.Wrapper>
        <SC.Item img={playerOne}>
            <h3>{leftPlayer}</h3>
            <h4>#</h4>
        </SC.Item>
        <SC.Item img={imgRightPlayer}>
            <h3>{rightPlayer}</h3>
            <h4>#</h4>
        </SC.Item>
    </SC.Wrapper> );
}
 
export default ScoreTable;