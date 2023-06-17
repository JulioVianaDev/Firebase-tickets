import { chamadosRef } from "../helpers/chamadosRef"
import { DataAtual } from "../helpers/DataAtual";
export const updateChamado = (nomeText,ocorridoText,id,navigation)=>{
    if(nomeText && nomeText.length > 0){
        const timestamp = DataAtual()
        chamadosRef
            .doc(id)
            .update({
                ocorrido: ocorridoText,
                nome: nomeText,
                lastUpdated: timestamp
            }).then(()=>{
                navigation.navigate('Home')
            })
            .catch(error=>{
                alert(error)
            })
  }
}