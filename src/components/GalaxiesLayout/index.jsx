import React from 'react';
import { GalaxyCard } from '../GalaxyCard';
import { StyledGalaxiesLayout } from './styles';

export const GalaxiesLayout = ({ galaxies }) => {
  return (
    <StyledGalaxiesLayout>
      {
        galaxies?.map(galaxy => <GalaxyCard key={galaxy.data[0].nasa_id} galaxy={galaxy} />)
      }
    </StyledGalaxiesLayout>
  )
}