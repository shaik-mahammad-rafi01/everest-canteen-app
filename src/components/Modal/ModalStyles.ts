import { StyleSheet } from "react-native";

export const ModalStyles = StyleSheet.create({
        container: {
        display: 'flex',
        marginTop: 200,
        marginLeft: 80,
        fontSize: 20,
        backgroundColor: '#f8f8f8ff',
        padding: 40,
        borderRadius: 10,
        gap: 10,
        width: 250,
        borderWidth: 1
    },
        modalHeader: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '500',
        color: '#E0A36D'
    },
        inputs: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 8
    },
        modalBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 60
    },
        modalAddBtn: {
        borderWidth: 1,
        width: 60,
        padding: 5,
        textAlign: 'center',
        borderRadius: 8,
    },
    modalRevoveBtn: {
        borderWidth: 1,
        width: 60,
        padding: 5,
        textAlign: 'center',
        borderRadius: 8,
    },
})