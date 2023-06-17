import { View, Text } from 'react-native'
import React from 'react'
import { chamadosListStyles } from '../styles/ChamadosList'
import { FontAwesome } from '@expo/vector-icons';
import { deleteChamado } from '../functions/deleteChamado';
export default function ChamadosList(chamados) {
  return (
    <FlatList
        data={chamados}
        numColumns={1}
        renderItem={({item})=>(
            <View> 
                <Pressable
                    style={chamadosListStyles.container}
                    onPress={()=>navigation.navigate('Details',{item})}
                >
                    <View stlyes={chamadosListStyles.innerContainer}>
                        <Text style={chamadosListStyles.itemHeading} >
                            {item.nome[0].toUpperCase()+ item.nome.slice(1)}
                        </Text>
                    </View>
                    <FontAwesome
                        name='trash'
                        color='red'
                        onPress={()=>deleteChamado(item)}
                        style={chamadosListStyles.todoIcon} 
                    />
                </Pressable>
            </View>
        )}
    />
  )
}