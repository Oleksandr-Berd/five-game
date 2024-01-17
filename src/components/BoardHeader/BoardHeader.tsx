import { useNavigate } from "react-router-dom";

import * as SC from "./BoardHeaderStyles";

import Button from "../../ui/Button/Button";
import { IButton } from "../../utils/interfaces";
import Logo from "../Logo/Logo";

const BoardHeader: React.FC<Partial<IButton>> = ({ handler }) => {
  const navigate = useNavigate();

  const restartHandler = () => {
    navigate("/");
  };

  return (
    <SC.BoardHeaderStyled>
      <Button content="menu" handler={handler!} />
      <Logo location="board"/>
      <Button content="restart" handler={restartHandler} />
    </SC.BoardHeaderStyled>
  );
};

export default BoardHeader;
