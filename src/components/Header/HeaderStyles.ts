import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
    headingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontStyle: 'italic',
        padding: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: '700',
        fontStyle: 'italic',
        color: '#cca039'
    },
    icon: {
        height: 40,
        width: 40
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 2,
        alignItems: 'center',
        justifyContent:'space-around'
        
    },
    logoutBtn:{
        borderWidth:1,
        padding:5,
        borderRadius:5,
    }
})