import React from 'react';
import Box from '../Box';
import styled from 'styled-components/native';

const Card = styled(Box)`
  border-radius: 4px;
  backgroundColor: ${props => props.backgroundColor};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05px;
  shadowColor: ${props => props.shadowColor};
  shadowOffset: {
    width: 0,
    height: 3,
  };
  shadowOpacity: 0.29;
  shadowRadius: 4.65;
  elevation: 7;
`;

export default Card;
