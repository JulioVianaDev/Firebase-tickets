import { StyleSheet } from "react-native";

export const formAddStyles = StyleSheet.create({
  formContainer:{
    flexDirection: 'row',
    height:80,
    marginLeft:10,
    marginRight: 10,
    marginTop:100
  },
  input:{
      height:48,
      borderRadius:5,
      overflow:'hidden',
      backgroundColor:'white',
      paddingLeft:16,
      flex:1,
      marginRight:5,
  },
  button:{
      height:47,
      borderRadius:5,
      backgroundColor: '#788eec',
      width: 80,
      alignItems:'center',
      justifyContent: 'center',
  },
  buttonText:{
      color: 'white',
      fontSize:20,
  },
})