import { StyleSheet } from "react-native";
export const OrderStyles = StyleSheet.create({
  itemContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius:20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius:'50%'
  },
  name:{
    color:'red',
  }
});