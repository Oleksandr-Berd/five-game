
import * as SC from "./RulesStyles";

import { ReactComponent as Check } from "../../assets/images/icon-check.svg";

const Rules: React.FC = () => {
  return (
    <SC.Wrapper>
      <SC.ContentWrapper>
        <SC.Title>rules</SC.Title>
        <ul>
          <SC.Item>
            <SC.SubTitle>objective</SC.SubTitle>
            <p>
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </SC.Item>
          <SC.Item>
            <SC.SubTitle>how to play</SC.SubTitle>
            <SC.SubList>
              <SC.SubItem>
                <p>Red goes first in the first game.</p>
              </SC.SubItem>
              <SC.SubItem>
                <p>
                  Players must alternate turns, and only one disc can be dropped
                  in each turn.
                </p>
              </SC.SubItem>
              <SC.SubItem>
                <p>The game ends when there is a 4-in-a-row or a stalemate.</p>
              </SC.SubItem>
              <SC.SubItem>
                <p>
                  The starter of the previous game goes second on the next game.
                </p>
              </SC.SubItem>
            </SC.SubList>
          </SC.Item>
        </ul>
        <SC.LinkBtn to="/">
          <Check />
        </SC.LinkBtn>
      </SC.ContentWrapper>
    </SC.Wrapper>
  );
};

export default Rules;
