import { StyleSheet } from "react-native";

export const WelcomeStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FCBA03',
    },
    titleContainer: {
        marginTop: 40,
    },
    welcomeHeader: {
        fontSize: 20,
        fontWeight: '700'
    },
    buttonsContainer: {
        gap: 15,
        alignItems: 'center',
    },
    footerContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        cursor: 'pointer',
    },
    buttonText: {
        fontWeight: 'bold',
    },
    footerText:{
        fontSize:20,
        fontWeight:"600"
    }
});
