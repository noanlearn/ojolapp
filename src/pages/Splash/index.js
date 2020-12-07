import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
    // componentDidMount = useEffect
    useEffect(() => {
        setTimeout(() => {

            // navigation.navigate() kita bisa back atau kembali ke screen sebelumnya
            navigation.replace('WelcomeAuth'); // karna ini splash, kita makenya replace supaya langsung keganti.. klo diback malah close aplikasi
        }, 2000);
    });

    return(
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
};

export default Splash;