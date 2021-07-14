import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  PlainText,
  Button,
  SubHeadingText,
  HeadingText,
  Card,
  Image,
  Box,
  Header,
  Input,
} from '../../components';
import {useTheme} from '@react-navigation/native';

const App = () => {
  const theme = useTheme();
  return (
    <Box as={SafeAreaView}>
      <Header />
      <Box as={ScrollView}>
        <Box p={20}>
          <HeadingText color={theme.colors.text}>Heading Text</HeadingText>
          <SubHeadingText color={theme.colors.text} mt={2}>
            SubHeading Text
          </SubHeadingText>
          <PlainText color={theme.colors.text} mt={2}>
            Plain Text
          </PlainText>
          <Input style={{color: theme.colors.text}} />
          <Card
            shadowColor={theme.colors.text}
            backgroundColor={theme.colors.card}
            mt={2}>
            <Image
              borderRadius={4.65}
              height={200}
              style={{
                resizeMode: 'contain',
              }}
              width={'100%'}
              source={{uri: 'https://picsum.photos/200/300'}}
            />
            <Box p={2}>
              <PlainText color={theme.colors.text} mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </PlainText>
            </Box>
          </Card>
          <Button title={'Button'} buttonStyle={{marginTop: 20}} />
        </Box>
      </Box>
    </Box>
  );
};

export default App;

// const componentsData = [
//   {
//     id: 1001,
//     name: 'Text',
//   },
// ];
