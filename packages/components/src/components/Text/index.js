import React from 'react';
import {fonts, fontSizes} from '../../theme';
import styled from 'styled-components/native';
import {
  textAlign,
  lineHeight,
  fontSize,
  letterSpacing,
  color,
  space,
  flexWrap,
  width,
  fontFamily,
  fontWeight,
} from 'styled-system';
const Text = styled.Text`
  ${textAlign}
  ${lineHeight}
  ${fontSize}
  ${letterSpacing}
  ${color}
  ${space}
  ${flexWrap}
  ${width}
  ${fontFamily}
  ${fontWeight}
`;

const HeadingText = props => {
  return <Text fontFamily={fonts.Bold} {...props} />;
};

const SubHeadingText = props => {
  return <Text fontFamily={fonts.Semi} {...props} />;
};

const PlainText = props => (
  <Text
    fontFamily={fonts.Regular}
    fontSize={fontSizes[1]}
    lineHeight={22}
    letterSpacing={0.3}
    {...props}
  />
);

export {HeadingText, SubHeadingText};

export default PlainText;
