import * as SC from "./PlayBoardStyles";

import boardWhiteSmall from "../../assets/images/board-layer-white-small.svg";
import boardBlackSmall from "../../assets/images/board-layer-black-small.svg";
import { matrix } from "../../db/db";
import PlayBoardItem from "./Item";
import { IActive, IBoard } from "../../utils/interfaces";


const PlayBoard: React.FC<IBoard & IActive> = ({
  handler,
  coord,
  activePlayer,
}) => {





  return (
    <SC.PlayBoard
      img={boardBlackSmall}
      img2={boardWhiteSmall}
      onClick={handler}
      coord={coord}
    >
      <SC.Matrix>
        {matrix.map((row, colIdx) => (
          <SC.Row key={(colIdx + 1) * 15}>
            {row.map((el, rowIdx) => (
              <PlayBoardItem
                key={rowIdx}
                coord={coord}
                idx={{ xIdx: rowIdx + 1, yIdx: colIdx + 1 }}
              ></PlayBoardItem>
            ))}
          </SC.Row>
        ))}
      </SC.Matrix>
    </SC.PlayBoard>
  );
};

export default PlayBoard;
