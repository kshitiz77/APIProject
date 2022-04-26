//import liraries
import React, { useState } from 'react';
import { Image, ImageBackground, Modal, Text, TouchableOpacity, View } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import TextInputWithLable from '../../Components/TextInputWithLable';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../navigation/navigationStrings';
import actions from '../../redux/actions';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styles';
// create a component
const Login = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState()
    const [userData, setUserData] = useState({
        phone: '',
        phoneCode: '',
        password: ''
    })

    const { phone, phoneCode, password } = userData

    const updateState = (data) => setUserData((userData)=> ({...userData, ...data})) 

    const handleSubmitBtn = async () => {
        let apiData = {
            phone: phone,
            phone_code: phoneCode,
            device_token: 'KDKFJDKFDFKDFDF',
            device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
            password: password
        }
        try {
            const res = await actions.login(apiData)
            console.log("Login api res_+++++",res)
            alert("User Login successfully....!!!")
        } catch (error) {
            console.log("error raised", error)
            alert(error?.message)
        }
    }
 
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: "https://wallpaperaccess.com/full/342047.jpg" }}
                    style={styles.imgStyle}>

                    <Text style={styles.loginTextStyle}>{strings.LOGIN}</Text>
                </ImageBackground>
                <View style={styles.mainStyle}>
                    <TextInputWithLable
                        placeholder={strings.ENTER_YOUR_PHONE_NUMBER}
                        label={strings.PHONE}
                        value={phone}
                        inputStyle={{ marginBottom: moderateScaleVertical(28) }}
                        keyboardType='phone-pad'
                        maxLength={10}
                        onChangeText={(text) => updateState({ phone: text })}
                    />
                    <TextInputWithLable
                        placeholder={strings.ENTER_YOUR_PHONE_CODE}
                        label={strings.PHONE_CODE}
                        value={phoneCode}
                        inputStyle={{ marginBottom: moderateScaleVertical(28) }}
                        keyboardType='phone-pad'
                        maxLength={4}
                        onChangeText={(text) => updateState({ phoneCode: text })}
                    />
                    <TextInputWithLable
                        placeholder={strings.ENTER_YOUR_PASSWORD}
                        label={strings.PASSWORD}
                        value={password}
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                        onPressRight={() => setIsVisible(!isVisible)}
                        onChangeText={(text) => updateState({ password: text })}
                    />
                    <ButtonComp
                        btnText={strings.LOGIN}
                        onPress={handleSubmitBtn}
                        btnStyle={{marginTop:moderateScaleVertical(30)}}
                    />
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.bottomTextStyle}>{strings.NOT_A_MEMBER} </Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
                    <Text style={styles.joinNowTextStyle}>{strings.JOIN_NOW}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

//make this component available to the app
export default Login;
