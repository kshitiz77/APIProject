import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, scale } from '../styles/responsiveSize';

const TextInputWithLable = ({
    label,
    placeholder,
    onChangeText = () => { },
    inputStyle = {},
    rightIcon,
    onPressRight,
    ...props
}) => {
    return (
        <View style={{ ...styles.inputContainerStyle, ...inputStyle }}>
            <Text style={styles.labelTextStyle}>{label}</Text>
            <View style={styles.flexView}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.inputStyle}
                    onChangeText={onChangeText}
                    {...props}
                />
                {rightIcon ? 
                <TouchableOpacity onPress={onPressRight} activeOpacity={0.5}>
                    <Image 
                    style={{ tintColor: colors.grayA }}
                    source={rightIcon} 
                    />
                </TouchableOpacity>
                : null
                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.grayB,
        borderRadius: moderateScale(4),
    },
    labelTextStyle: {
        fontSize: scale(15),
        color: colors.grayC,
    },
    inputStyle: {
        flex:1,
        paddingVertical: moderateScaleVertical(8),
        fontSize: scale(16),
        color: colors.black,
    },
    flexView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

//make this component available to the app
export default TextInputWithLable;
