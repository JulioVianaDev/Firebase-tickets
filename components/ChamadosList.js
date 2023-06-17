import { View, Text } from 'react-native'
import React from 'react'

export default function ChamadosList(chamados) {
  return (
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
  )
}