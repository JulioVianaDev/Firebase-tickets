import { View, Text,FlatList,StyleSheet,TextInput,TouchableOpacity,Keyboard,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'
import {firebase} from '../config';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addChamado } from '../functions/addChamado';
import { deleteChamado } from '../functions/deleteChamado';
import { chamadoRef } from '../helpers/chamadosRef';
const Home = () => {
    const [chamados,setChamados] = useState([]);
    const [addData,setAddData] = useState({nome: '',ocorrido: ''});
    const navigation = useNavigation()
    useEffect(()=>{
        
    },[])
    

    
    return (
    <View style={{flex: 1}}>
        
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder='Add a new todo'
                placeholderTextColor='#aaaaaa'
                onChangeText={(nome)=>setAddData({...addData,nome: nome})}
                value={addData.nome}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.input}
                placeholder='Add a new todo'
                placeholderTextColor='#aaaaaa'
                onChangeText={(ocorrido)=>setAddData({...addData,ocorrido: ocorrido})}
                value={addData.ocorrido}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
            />
            <TouchableOpacity style={styles.button} onPress={()=>addChamado(addData,setAddData)}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
  
        </View>
        <FlatList
                data={chamados}
                numColumns={1}
                renderItem={({item})=>(
                    <View> 
                        <Pressable
                            style={styles.container}
                            onPress={()=>navigation.navigate('Details',{item})}
                        >
                            <View stlyes={styles.innerContainer}>
                                <Text style={styles.itemHeading} >
                                    {item.nome[0].toUpperCase()+ item.nome.slice(1)}
                                </Text>
                            </View>
                            <FontAwesome
                                name='trash'
                                color='red'
                                onPress={()=>deleteChamado(item)}
                                style={styles.todoIcon} 
                            />
                        </Pressable>
                    </View>
                )}
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
    todoIcon:{
        marginTop:5,
        fontSize: 30,
        marginLeft:14,
        marginRight: 14
    }
})