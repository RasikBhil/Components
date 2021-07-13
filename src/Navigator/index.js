import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {Home} from '../Screens';
import {dark, light} from '../theme';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const Navigator = ({theme}) => {
  // const theme = useSelector(({app}) => app.theme);
  console.log('theme', theme);
  useEffect(() => {
    if (theme === 'dark') {
      StatusBar.setBarStyle('light-content', false);
    }
    if (theme === 'light') {
      StatusBar.setBarStyle('dark-content', false);
    }
    // StatusBar.setBackgroundColor('da')
  }, [theme]);
  return (
    <NavigationContainer theme={theme === 'light' ? light : dark}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={'/home'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({app: {theme}}) => ({theme});

export default connect(mapStateToProps, {})(Navigator);
