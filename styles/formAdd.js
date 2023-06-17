import { StyleSheet } from "react-native";

export const formAddStyles = StyleSheet.create({
  formContainer:{
    flexDirection: 'column',
    // justifyContent: ,
    // alignItems: 'stretc:h',
    height:180,
    marginLeft:10,
    marginRight: 10,
    marginTop:40,
  },
  input:{
      height:11,
      borderRadius:5,
      overflow: 'hidden',
      backgroundColor: 'white',
      paddingLeft:16,
      flex:1,
      margin:5,
  },
  button:{
      height:47,
      borderRadius:5,
      backgroundColor: '#788eec',
      width: 129,
      alignItems:'center',
      justifyContent: 'center',
  },
  buttonText:{
      color: 'white',
      fontSize:20,
  },
})