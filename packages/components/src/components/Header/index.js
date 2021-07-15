import React, {useState} from 'react';
import Box from '../Box';
import {TouchableOpacity, Platform} from 'react-native';
import PlainText from '../Text';
import Icon from 'react-native-vector-icons/Entypo';
import {Switch} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import store from '../../store';
import {changeTheme} from '../../store/actions';
import {IoMenuSharp} from 'react-icons/io5';
import {useDispatch, useSelector} from 'react-redux';

const Header = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {themeMode} = useSelector(({app:{theme}}) => ({themeMode: theme}))

  const handleChange = e => {
    const theme = e ? 'dark' : 'light'
    dispatch(changeTheme(theme));
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
      display={'flex'}
      backgroundColor={theme.colors.background}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width={'100%'}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {Platform.OS === 'web' ? (
                <IoMenuSharp color={theme.colors.text} size={30} name={'menu'} />
            ) : (
                <Icon color={theme.colors.text} size={30} name={'menu'} />
            )}

        </TouchableOpacity>
      <PlainText color={theme.colors.text}>App</PlainText>
      <Switch
        value={themeMode === 'dark'}
        onValueChange={handleChange}
        color={theme.colors.text}
      />
    </Box>
  );
};

export default Header;
