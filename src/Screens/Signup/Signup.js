//import liraries
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLable from '../../Components/TextInputWithLable';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';
import actions from '../../redux/actions';
import navigationStrings from '../../navigation/navigationStrings';

// create a component
const Register = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState()
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        phoneCode: '',
        countryCode: '',
        password: ''
    })

    const { firstName, lastName, email, phone, phoneCode, countryCode, password } = userData;

    const updateState = (data) => setUserData((userData) => ({ ...userData, ...data }));

    const _onSubmitSignUpData = async() => {
        let apiData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            phone_code: phoneCode,
            country_code: countryCode,
            device_token: 'KDKFJDKFDFKDFDF',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password
        }
        try {
            const res = await actions.signup(apiData)
            console.log("singnup api res_+++++",res)
            alert("User signup successfully....!!!")
            if(!!res){
                navigation.navigate(navigationStrings.LOGIN)
            }
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.headingStyle}>{strings.REGISTER}</Text>
                    <TextInputWithLable
                        label={strings.FIRST_NAME}
                        placeholder={strings.ENTER_YOUR_FIRST_NAME}
                        onChangeText={(text) => updateState({ firstName: text })}
                        value={firstName}
                    />
                    <TextInputWithLable
                        label={strings.LAST_NAME}
                        placeholder={strings.ENTER_YOUR_LAST_NAME}
                        inputStyle={{ marginVertical: moderateScaleVertical(28) }}
                        onChangeText={(text) => updateState({ lastName: text })}
                        value={lastName}

                    />
                    <TextInputWithLable
                        label={strings.EMAIL}
                        placeholder={strings.ENTER_YOUR_EMAIL}
                        keyboardType="email-address"
                        onChangeText={(text) => updateState({ email: text })}
                        value={email}
                    />
                    <TextInputWithLable
                        label={strings.PHONE}
                        placeholder={strings.ENTER_YOUR_PHONE_NUMBER}
                        inputStyle={{ marginVertical: moderateScaleVertical(28) }}
                        keyboardType="phone-pad"
                        maxLength={10}
                        onChangeText={(text) => updateState({ phone: text })}
                        value={phone}
                    />
                    <TextInputWithLable
                        label={strings.PHONE_CODE}
                        placeholder={strings.ENTER_YOUR_PHONE_CODE}
                        keyboardType="phone-pad"
                        maxLength={4}
                        onChangeText={(text) => updateState({ phoneCode: text })}
                        value={phoneCode}
                    />

                    <TextInputWithLable
                        label={strings.COUNTRY_CODE}
                        placeholder={strings.ENTER_YOUR_COUNTRY_CODE}
                        inputStyle={{ marginVertical: moderateScaleVertical(28), textTransform: 'uppercase' }}
                        onChangeText={(text) => updateState({ countryCode: text })}
                        value={countryCode}
                    />
                    <TextInputWithLable
                        placeholder={strings.ENTER_YOUR_PASSWORD}
                        label={strings.PASSWORD}
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setIsVisible(!isVisible)}
                        onChangeText={(text) => updateState({ password: text })}
                        value={password}
                    />
                    <ButtonComp
                        btnText={strings.CONTINUE}
                        btnStyle={{ width: '100%', marginTop: moderateScaleVertical(28) }}
                        onPress={_onSubmitSignUpData}
                    // onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
                    />
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    );
};

// define your styles

//make this component available to the app
export default Register;
