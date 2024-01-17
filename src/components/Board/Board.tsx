import { useState } from "react";

import * as SC from "./BoartStyles";

import boardWhiteSmall from "../../assets/images/board-layer-white-small.svg";
import boardBlackSmall from "../../assets/images/board-layer-black-small.svg";
import { ReactComponent as YellowSmall } from "../../assets/images/counter-yellow-small.svg";

import BoardHeader from "../BoardHeader/BoardHeader";
import ScoreTable from "../ScoreTable/ScoreTable";
import PlayBoard from "../PlayBoard/PlayBoard";

const Board: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [coord, setCoord] = useState<any>([]);

  const menuHandler = () => {
    setIsMenu(!isMenu);
  };

  const handleMove = (evt: any) => {
   
    

    const x = Math.round(evt.pageX / (34 + 13));
    const y = Math.round((evt.pageY - 271) / (34 + 13));

    if (coord.length === 0) {
        setCoord([{x, y}])
    } else {
        setCoord((prev:any) => [...prev,{x, y}])
    }
  };
  
  return (
    <SC.BoardStyled>
      <BoardHeader handler={menuHandler} />
      <ScoreTable />
      <PlayBoard handler={handleMove} coord={coord}/>
    </SC.BoardStyled>
  );
};

export default Board;
