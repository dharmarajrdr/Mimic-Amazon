import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 50 : 0
    },
    FRCB: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    LoginSignUpButton:{
        backgroundColor: 'orange',
        marginTop: 40,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
});