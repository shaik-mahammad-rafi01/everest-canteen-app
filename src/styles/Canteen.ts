import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
headingContainer:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  fontStyle:'italic',
  padding:10, 
},
heading:{
  fontSize:22,
  fontWeight:'700',
  fontStyle:'italic',
  color:'#cca039'

},
header:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:10,
  backgroundColor:'#E0A36D',
  padding:5
  
},
mainContainer:{
display:'flex',
flexDirection:'row',
justifyContent:'center'
},
card:{
  borderWidth:1,
  margin:10,
  padding:20,
  borderRadius:10,
},
cardContainer:{
  display:'flex',
  flexDirection:'row',
},

image : {
    height:150,
    width:150
} , 

AddBtn:{
    
},
container:{
    display:'flex',
    marginTop:200,
    marginLeft:100,
    marginRight:50,
    fontSize:20,
    backgroundColor:'#d9e2ccff',
    padding:40,
    borderRadius:10,
    gap:20
},
modalHeader:{
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'500',
    color:'#E0A36D'
},
RemoveBtn:{
    padding:5,
    textAlign:'center',
    backgroundColor:'#ff3737',
    borderRadius: 15,
    cursor:'pointer'
},
})