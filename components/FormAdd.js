import { View, TextInput,TouchableOpacity,Text } from 'react-native'
import React,{ useState }  from 'react'
import { formAddStyles } from '../styles/formAdd'
import { addChamado } from '../functions/addChamado';

const FormAdd = () => {
  const [addData,setAddData] = useState({nome: '',ocorrido: ''});
  return (
    <View style={formAddStyles.formContainer}>
        <TextInput
            style={formAddStyles.input}
            placeholder='Add a new todo'
            placeholderTextColor='#aaaaaa'
            onChangeText={(nome)=>setAddData({...addData,nome: nome})}
            value={addData.nome}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
        />
        <TextInput
            style={formAddStyles.input}
            placeholder='Add a new todo'
            placeholderTextColor='#aaaaaa'
            onChangeText={(ocorrido)=>setAddData({...addData,ocorrido: ocorrido})}
            value={addData.ocorrido}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
        />
        <TouchableOpacity style={formAddStyles.button} onPress={()=>addChamado(addData,setAddData)}>
            <Text style={formAddStyles.buttonText}>Add</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FormAdd