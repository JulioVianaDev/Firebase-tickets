import { View, Text,FlatList,StyleSheet,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
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
            navigation={navigation}
        />
    </View>
  )
}

export default Home
