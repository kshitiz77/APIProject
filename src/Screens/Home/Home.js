//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import actions from '../../redux/actions';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import { useSelector } from 'react-redux';
// create a component
const Home = () => {
    const userStatus = useSelector((state) => state?.userStatus?.userData)
    console.log(userStatus)
    
    const signOut = () => {
            actions.logout();
    }
    return (
        <View style={styles.container}>
            <Text>{userStatus?.email}</Text>
            <ButtonComp
                        btnText={strings.LOGOUT}
                        onPress={signOut}
                        btnStyle={{width:moderateScale(240), marginVertical:moderateScaleVertical(40)}}
                    />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        // width:moderate
    },
});

//make this component available to the app
export default Home;
