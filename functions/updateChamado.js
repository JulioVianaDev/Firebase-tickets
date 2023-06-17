import { chamadosRef } from "../helpers/chamadosRef"
import {firebase} from '../config'

export const updateChamado = (nomeText,ocorridoText,id,navigation)=>{
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    if(nomeText && nomeText.length > 0){
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