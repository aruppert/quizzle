import React from 'react';
import styled from '@emotion/styled';
import HighscoreCard from '../components/cards/HighscoreCard';
import useFetch from '../hooks/useFetch';
import { flexColumnCenter } from '../styles/General';

const Main = styled.main`
  margin: auto;
  ${flexColumnCenter};
  height: 100%;
  width: 375px;
`;

const TextWrapperOutsideCard = styled.h2`
  margin: 0 0 10px;
  color: ${props => props.theme.colors.card2};
  font-family: 'Leckerli One', cursive;
  font-size: 35px;
  font-weight: bold;
`;

export default function HighscorePage() {
  // eslint-disable-next-line
  const highscoreEntries = useFetch('/api/highscores');

  if (!highscoreEntries) {
    return null;
  } else {
    return (
      <Main>
        <TextWrapperOutsideCard>highscores</TextWrapperOutsideCard>
        {highscoreEntries.map((highscoreEntries, index) => (
          <HighscoreCard
            key={highscoreEntries._id}
            index={index}
            name={highscoreEntries.name}
            score={highscoreEntries.score}
            questionsPlayed={highscoreEntries.questionsPlayed}
          />
        ))}
      </Main>
    );
  }
}
