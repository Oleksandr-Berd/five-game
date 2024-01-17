import * as SC from "./PlayBoardStyles";

import boardWhiteSmall from "../../assets/images/board-layer-white-small.svg";
import boardBlackSmall from "../../assets/images/board-layer-black-small.svg";
import circle from "../../assets/images/counter-red-small.svg";
import { matrix } from "../../db/db";

type Props = {
  handler: (evt: any) => void;
  coord: { x: number; y: number };
};

const PlayBoard: React.FC<Props> = ({ handler, coord }) => {
  
  return (
    <SC.PlayBoard
      img={boardBlackSmall}
      img2={boardWhiteSmall}
      onClick={handler}
      coord={coord}
    >
     <SC.Matrix>
       {
        matrix.map(row => <SC.Row>
            {row.map(el => <SC.Cell></SC.Cell>)}
        </SC.Row>)
       }
     </SC.Matrix>
    </SC.PlayBoard>
  );
};

export default PlayBoard;
