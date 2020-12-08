import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ill_welcomeAuth} from '../../assets';
import {colors} from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      <Image source={ill_welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
      <ActionButton
        desc="Silahkan masuk, jika Anda sudah memiliki akun"
        title="Masuk"
      />
      <ActionButton
        desc="atau silahkan daftar, jika Anda belum memiliki akun"
        title="Daftar"
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
    illustration: {
      width: 219,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};

export default WelcomeAuth;
