import { useState } from "react";

import * as SC from "./BoartStyles";

import BoardHeader from "../BoardHeader/BoardHeader";
import ScoreTable from "../ScoreTable/ScoreTable";
import PlayBoard from "../PlayBoard/PlayBoard";
import Rectangle from "../Rectangle/Rectangle";
import Timer from "../Timer/Timer";
import { useLocation } from "react-router-dom";

const Board: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [coord, setCoord] = useState<any>([]);

const location = useLocation()

const {pathname} = location

const mode = pathname.split("/").reverse()[0] 

  const menuHandler = () => {
    setIsMenu(!isMenu);
  };

  const handleMove = (evt: any) => {
    const x = Math.round(evt.pageX / (34 + 13));
    const y = Math.round((evt.pageY - 271) / (34 + 13));

    if (coord.length === 0) {
      setCoord([{ x, y }]);
    } else {
      setCoord((prev: any) => [...prev, { x, y }]);
    }
  };

  return (
    <SC.BoardStyled>
      <BoardHeader handler={menuHandler} />
      <ScoreTable mode={mode}/>
      <PlayBoard handler={handleMove} coord={coord} />
      <Rectangle />
      <Timer />
    </SC.BoardStyled>
  );
};

export default Board;
