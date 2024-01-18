import * as SC from './TimerStyles'

import { ReactComponent as RedTimer } from "../../assets/images/turn-background-red.svg";

const Timer: React.FC = () => {
  return (
    <SC.TimerStyled>
      <RedTimer />
    </SC.TimerStyled>
  );
};

export default Timer;
