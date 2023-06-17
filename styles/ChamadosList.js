import { StyleSheet } from "react-native";

export const chamadosListStyles = StyleSheet.create({
  container:{
    backgroundColor: "#e5e5e5",
    padding:15,
    borderRadius:15,
    margin:5,
    marginHorizontal:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
},
innerContainer:{
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 45,
},
itemHeading:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 22
},
todoIcon:{
    marginTop:5,
    fontSize: 30,
    marginLeft:14,
    marginRight: 14
}
})