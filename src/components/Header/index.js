import React, {useState} from 'react';
import Box from '../Box';
import PlainText from '../Text';
import Icon from 'react-native-vector-icons/Entypo';
import {Switch} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import store from '../../store';
import {changeTheme} from '../../store/actions';

const Header = () => {
  const theme = useTheme();
  const [isDarkMode, setDark] = useState(false);

  const handleChange = e => {
    setDark(e);
    store.dispatch(changeTheme(e ? 'dark' : 'light'));
  };
  return (
    <Box
      style={{
        shadowColor: theme.colors.text,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
      backgroundColor={theme.colors.background}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width={'100%'}>
      <Icon color={theme.colors.text} size={30} name={'menu'} />
      <PlainText>App</PlainText>
      <Switch
        value={isDarkMode}
        onValueChange={handleChange}
        color={theme.colors.text}
      />
    </Box>
  );
};

export default Header;
