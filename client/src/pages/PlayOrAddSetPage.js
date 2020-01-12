import React from 'react';
import styled from '@emotion/styled';
import HighCard from '../components/HighCard';
import WideBoxWithLinearGradientBorder from '../components/WideBoxWithLinearGradientBorder';
import Dice from '../icons/Dice';
import { flexColumnCenter } from '../styles/General';
import AddQuestion from '../icons/AddQuestion';

const Main = styled.main`
  ${flexColumnCenter};
  flex-grow: 1;
  height: calc(100vh - 140px);
  margin: auto;
  width: 375px;
`;

const SelectionContainer = styled.div`
  display: flex;
  margin: 40px 0;
  justify-content: space-evenly;
  width: 375px;
`;

export default function PlayOrAddSetPage() {
  return (
    <Main>
      <WideBoxWithLinearGradientBorder text={`Welcome friend! `} />
      <SelectionContainer>
        <HighCard text={`Play a single- or multiplayer game`}>
          <Dice />
        </HighCard>
        <HighCard text={`Add public or private questions`}>
          <AddQuestion />
        </HighCard>
      </SelectionContainer>
      <WideBoxWithLinearGradientBorder text={` Enjoy the game!`} />
    </Main>
  );
}
