import { StyleSheet } from "react-native";

export const ItemsCardStyles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    card: {
        borderWidth: 1,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
    },
    image: {
        height: 120,
        width: 100
    },
    imageTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
        RemoveBtn: {
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#ff3737',
        borderRadius: 15,
        cursor: 'pointer'
    },
})