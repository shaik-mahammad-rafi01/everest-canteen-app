import { StyleSheet } from "react-native";

export const CanteenMenuStyles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#E0A36D',
        padding: 8,
    },
        AddBtn: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        backgroundColor: 'green',
        width: 50,
        textAlign: 'center'
    },
        modalViewContainer: {
        position: 'absolute'
    },
})