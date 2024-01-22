import * as SC from './TimerStyles'

import { ReactComponent as RedTimer } from "../../assets/images/turn-background-red.svg";
import {ReactComponent as YellowTimer} from '../../assets/images/turn-background-yellow.svg'
import { IActive } from '../../utils/interfaces';

const Timer: React.FC <IActive>= ({activePlayer}) => {
  return (
    <SC.TimerStyled>
        <SC.Title>{activePlayer}'s turn</SC.Title>
        {activePlayer === "player1" ? 
      <RedTimer />
        :
        <YellowTimer/>
    }
    </SC.TimerStyled>
  );
};

export default Timer;
