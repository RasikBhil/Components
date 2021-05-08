import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Button as NativeButton} from 'react-native-elements';
import {colors, fonts} from '../../theme';

const Button = ({primary, buttonStyle, titleStyle = {}, onPress, ...props}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        base: {
          height: 48,
        },
        primary: {
          backgroundColor: colors.primary,
        },
        primaryTitle: {
          color: colors.white,
        },
      }),
    [],
  );
  const {fontWeight, fontFamily, fontStyle, ...titleStyleRest} = titleStyle;

  return (
    <NativeButton
      buttonStyle={{
        ...styles.base,
        ...(primary ? styles.primary : {}),
        ...(buttonStyle || {}),
      }}
      titleStyle={{
        fontFamily: fonts.Semi,
        ...(primary ? styles.primaryTitle : {}),
        ...{
          ...titleStyleRest,
          fontFamily: fonts.Semi,
        },
      }}
      onPress={onPress}
      {...props}
    />
  );
};

export default Button;
