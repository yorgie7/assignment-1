import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height:250px;
  height: fit-content;
  width: 30%;
  margin: 22px auto;
  border: 1px solid #e6edf7;
  border-radius: 2px 2px 10px 10px;
  background-color: #ffffff;
  text-align: center;
  box-shadow: 0px 1px 2px gray;`

  const Title = styled.h1`
  background-color: #e6edf7;
  padding: 8px 0 8px 0;
  border: 1px solid #e6edf7;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  color: slategray;
  border-radius: 1px 1px 0 0;`


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
