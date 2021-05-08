import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  PlainText,
  Button,
  SubHeadingText,
  HeadingText,
  Card,
  Image,
  Box,
} from './src/components';

const App = () => {
  return (
    <Box as={SafeAreaView}>
      <Box p={20}>
        <HeadingText>Heading Text</HeadingText>
        <SubHeadingText mt={2}>SubHeading Text</SubHeadingText>
        <PlainText mt={2}>Plain Text</PlainText>
        <Card p={2} mt={2}>
          <Image
            height={200}
            width={'100%'}
            source={{uri: 'https://picsum.photos/200/300'}}
          />
          <PlainText mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PlainText>
        </Card>
        <Button title={'Button'} buttonStyle={{marginTop: 20}} />
      </Box>
    </Box>
  );
};

export default App;
