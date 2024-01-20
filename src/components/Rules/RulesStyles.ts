import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  padding-top: 97px;
  padding-bottom: 97px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContentWrapper = styled.div`
  position: relative;

  display: inline-block;

  padding-top: 30px;
  padding-bottom: 61px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #fff;

  border-radius: 40px;

  border: 3px solid #000;
  border-bottom: 10px solid #000;
`;

export const Title = styled.h2`
  margin-bottom: 29px;

  text-transform: uppercase;
  text-align: center;

  font-size: 56px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 17px;

  text-transform: uppercase;

  font-size: 20px;

  color: #7945ff;
`;

export const SubList = styled.ol`
  font-family: "Bold";
`;

export const SubItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  margin-left: 20px;

  & > p {
    margin-left: 19px;

    font-size: 16px;
  }
`;

export const LinkBtn = styled(NavLink)`
  position: absolute;
  left: 0;
  bottom: 0;

  transform: translateY(36px) translateX(200%);
`;
