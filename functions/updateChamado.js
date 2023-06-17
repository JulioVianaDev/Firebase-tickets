import { chamadosRef } from "../helpers/chamadosRef"
export const updateChamado = (nomeText,ocorridoText,id,navigation)=>{
    if(nomeText && nomeText.length > 0){
      chamadosRef
        .doc(id)
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