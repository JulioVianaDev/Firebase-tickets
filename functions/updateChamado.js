import { chamadosRef } from "../helpers/chamadosRef"
import { useNavigation } from '@react-navigation/native';
export const updateChamado = (nomeText,ocorridoText)=>{
    const navigation = useNavigation();
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