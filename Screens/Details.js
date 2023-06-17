import { View, Text,TextInput,StyleSheet,Pressable } from 'react-native'
import React,{useState} from 'react'
import {firebase}from '../config';
import { useNavigation } from '@react-navigation/native';
const Details = ({route}) => {
    const chamadosRef = firebase.firestore().collection('chamados');
    const [nomeText,setNomeText] = useState(route.params.item.nome);
    const [ocorridoText,setOcorridoText] = useState(route.params.item.ocorrido);
    const navigation = useNavigation();
    
    const updateTodo = ()=>{
        if(nomeText && nomeText.length > 0){
            chamadosRef
                .doc(route.params.item.id)
                .update({
                    ocorrido: ocorridoText,
                    nome: nomeText
                }).then(()=>{
                    navigation.navigate('Home')
                })
                .catch(error=>{
                    alert(error)
                })
        }
    }
    
    return (
        <View style={styles.container}>
            
            <TextInput
                style={styles.textField}
                onChangeText={setNomeText}
                value={nomeText}
                placeholder='Nome'
            />
            <TextInput
                style={styles.textField}
                onChangeText={setOcorridoText}
                placeholder='Descrição'
                value={ocorridoText}
            />
            <Pressable
                style={styles.buttonUpdate}
                onPress={()=>{updateTodo()}}
            >
                <Text>UPDATE</Text>
            </Pressable>
        </View>
    )
}

export default Details


const styles = StyleSheet.create({
    container:{
        marginTop: 80,
        marginLeft: 15,
        marginRight: 15,
    },
    textField:{
        marginBottom: 10,
        padding:10,
        fontSize:15,
        color: '#000000',
        backgroundColor: '#e0e0e0',
        borderRadius: 5
    },
    buttonUpdate:{
        marginTop:25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: '#0de065'
    }
})