import React from 'react';
import {View, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Input} from '../../components';
import {colors} from '../../utils';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Register = () => {
  return (
    <DismissKeyboard>
      <View style={{padding: 20}}>
        <View style={{width: 25, height: 25, backgroundColor: 'blue'}} />
        <View
          style={{
            width: 106,
            height: 115,
            backgroundColor: 'purple',
            marginTop: 8,
          }}
        />
        <Text
          style={{
            maxWidth: 199,
            fontSize: 14,
            fontWeight: 'bold',
            color: colors.default,
            marginTop: 16,
          }}>
          Mohon mengisi beberapa data untuk proses daftar akun
        </Text>
        <Input placeholder="Nama Lengkap" keyboardType="default" />
        <Input placeholder="Email" keyboardType="default" />
        <Input placeholder="Password" keyboardType="default" />
      </View>
    </DismissKeyboard>
  );
};

export default Register;
