import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#E0A36D',
        padding: 8,
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    card: {
        borderWidth: 1,
        marginRight:30,
        marginLeft:30,
        marginBottom:10,
        padding: 20,
        borderRadius: 10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:40
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center'
    },

    image: {
        height: 120,
        width: 100
    },

    AddBtn: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        backgroundColor: 'green',
        width: 50,
        textAlign: 'center'
    },
    container: {
        display: 'flex',
        marginTop: 200,
        marginLeft: 80,
        fontSize: 20,
        backgroundColor: '#d9e2ccff',
        padding: 40,
        borderRadius: 10,
        gap: 20,
        width: 250
    },
    modalHeader: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '500',
        color: '#E0A36D'
    },
    RemoveBtn: {
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#ff3737',
        borderRadius: 15,
        cursor: 'pointer'
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
        backgroundColor: '#33cc33'


    },
    modalRevoveBtn: {
        borderWidth: 1,
        width: 60,
        padding: 5,
        textAlign: 'center',
        borderRadius: 8,
        backgroundColor: '#ff3737'
    },
    imageTextContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        flexWrap:'wrap'
    },
})