import { useState } from "react";

import * as SC from "./BoartStyles";

import boardWhiteSmall from '../../assets/images/board-layer-white-small.svg'
import boardBlackSmall from '../../assets/images/board-layer-black-small.svg'

import BoardHeader from "../BoardHeader/BoardHeader";
import ScoreTable from "../ScoreTable/ScoreTable";

const Board: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const menuHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <SC.BoardStyled>
      <BoardHeader handler={menuHandler} />
      <ScoreTable/>
      <SC.PlayBoard img={boardBlackSmall} img2={boardWhiteSmall}></SC.PlayBoard>
    </SC.BoardStyled>
  );
};

export default Board;
