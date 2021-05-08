import React from 'react';
import {Input as ElementInput} from 'react-native-elements';

const Input = ({
  containerStyle,
  disabled,
  disabledInputStyle,
  errorMessage,
  errorProps,
  errorStyle,
  InputComponent,
  inputContainerStyle,
  inputStyle,
  label,
  labelProps,
  labelStyle,
  leftIcon,
  leftIconContainerStyle,
  renderErrorMessage,
  rightIcon,
  rightIconContainerStyle,
  placeholder,
  onChangeText,
  onBlur,
  keyboardType,
  style,
  value,
  type,
}) => {
  return (
    <ElementInput
      containerStyle={containerStyle}
      disabled={disabled}
      disabledInputStyle={disabledInputStyle}
      errorMessage={errorMessage}
      errorProps={errorProps}
      errorStyle={errorStyle}
      InputComponent={InputComponent}
      inputContainerStyle={inputContainerStyle}
      inputStyle={inputStyle}
      label={label}
      labelProps={labelProps}
      labelStyle={labelStyle}
      leftIcon={leftIcon}
      leftIconContainerStyle={leftIconContainerStyle}
      renderErrorMessage={renderErrorMessage}
      rightIcon={rightIcon}
      rightIconContainerStyle={rightIconContainerStyle}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      keyboardType={keyboardType}
      style={style}
      value={value}
    />
  );
};

export default Input;
