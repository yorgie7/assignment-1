import React from 'react';
import { Container, Title } from './styled-margin';

const MarginBar = ({ title , children}) => {
  return (
   <Container>
      <Title>
        {title}
      </Title>

      {children}
    </Container>
  );
}

export default MarginBar;
