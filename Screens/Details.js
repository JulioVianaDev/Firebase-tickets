import { View, Text,TextInput,Pressable } from 'react-native'
import React,{useState} from 'react'
import { updateChamado } from '../functions/updateChamado';
import { useNavigation } from '@react-navigation/native';
import { detailsStyles } from '../styles/Details';
const Details = ({route}) => {
    const [nomeText,setNomeText] = useState(route.params.item.nome);
    const [ocorridoText,setOcorridoText] = useState(route.params.item.ocorrido);
    const id = route.params.item.id
    const navigation = useNavigation();
    return (
        <View style={detailsStyles.container}>
            <TextInput
                style={detailsStyles.textField}
                onChangeText={setNomeText}
                value={nomeText}
                placeholder='Nome'
            />
            <TextInput
                style={detailsStyles.textField}
                onChangeText={setOcorridoText}
                placeholder='Descrição'
                value={ocorridoText}
            />
            <Pressable
                style={detailsStyles.buttonUpdate}
                onPress={()=>updateChamado(nomeText,ocorridoText,id,navigation)}
            >
                <Text>UPDATE</Text>
            </Pressable>
        </View>
    )
}

export default Details
