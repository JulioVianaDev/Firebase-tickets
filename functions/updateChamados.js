import { chamadosRef } from "../helpers/chamadosRef"
export const updateTodo = ()=>{
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