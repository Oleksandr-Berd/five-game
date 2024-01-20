import { NavLink } from "react-router-dom";

import * as SC from './RulesStyles'

import { ReactComponent as Check } from "../../assets/images/icon-check.svg";

const Rules: React.FC = () => {
  return (
    <SC.Wrapper>
      <SC.ContentWrapper>
        <SC.Title>rules</SC.Title>
        <ul>
          <li>
            <h3>objective</h3>
            <p>
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </li>
          <li>
            <h2>how to play</h2>
            <ol>
              <li>Red goes first in the first game.</li>
              <li>
                Players must alternate turns, and only one disc can be dropped
                in each turn.{" "}
              </li>
              <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
              <li>
                The starter of the previous game goes second on the next game.
              </li>
            </ol>
          </li>
        </ul>
        <NavLink to="/">
          <Check />
        </NavLink>
      </SC.ContentWrapper>
    </SC.Wrapper>
  );
};

export default Rules;
