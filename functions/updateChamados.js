import { chamadosRef } from "../helpers/chamadosRef"
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();
export const updateTodo = (nomeText,ocorridoText)=>{
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