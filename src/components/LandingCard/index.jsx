import React from 'react';
import { StyledLandingCard } from './styles';

export const LandingCard = ({ data, message }) => {

  return (
    <StyledLandingCard>
      <p className="message">Más de</p>
      <p className="data">{data}</p>
      <p className="message">{message}</p>
    </StyledLandingCard>
  );
};
