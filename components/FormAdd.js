import { View, TextInput,TouchableOpacity,Text } from 'react-native'
import React from 'react'

const FormAdd = () => {
  return (
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
  )
}

export default FormAdd