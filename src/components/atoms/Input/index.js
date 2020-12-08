import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({placeholder, keyboardType}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      placeholderTextColor={colors.default}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.disable,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: colors.default,
  },
});

export default Input;
