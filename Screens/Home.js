import { View, Text,FlatList,StyleSheet,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { deleteChamado } from '../functions/deleteChamado';
import { getChamados } from '../functions/getChamados';
import FormAdd from '../components/FormAdd';
import ChamadosList from '../components/ChamadosList';
const Home = () => {
    const [chamados,setChamados] = useState([]);
    const navigation = useNavigation()
    useEffect(()=>{
        getChamados(setChamados);
    },[])
    return (
    <View style={{flex: 1}}>
        <FormAdd/>
       
        <ChamadosList
            chamados={chamados}
        
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
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