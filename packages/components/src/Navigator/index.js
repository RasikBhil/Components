import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  {createDrawerNavigator} from '@react-navigation/drawer';
import {StatusBar} from 'react-native';
import {Home, TextComponents} from '../Screens';
import {dark, light} from '../theme';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigator = ({theme}) => {
  console.log('theme', theme);
  useEffect(() => {
    if (theme === 'dark') {
      StatusBar.setBarStyle('light-content', false);
    }
    if (theme === 'light') {
      StatusBar.setBarStyle('dark-content', false);
    }
  }, [theme]);
  return (
    <NavigationContainer theme={theme === 'light' ? light : dark}>
      <Drawer.Navigator drawerContentOptions={{
        labelStyle: {
          color: theme === 'light' ? light.colors.text : dark.colors.text
        }
      }} headerMode="none">
        <Drawer.Screen name={'Home'} component={Home} />
        <Drawer.Screen name={'TextComponents'} component={TextComponents} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({app: {theme}}) => ({theme});

export default connect(mapStateToProps, {})(Navigator);
