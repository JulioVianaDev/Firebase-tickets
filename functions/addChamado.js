import {firebase} from '../config'
import { chamadoRef } from '../helpers/chamadosRef';
import { Keyboard } from 'react-native';
export const addChamado=(addData,setAddData)=>{
  //check se tem um todo
  if (addData.nome && addData.nome.length>0){
      //pegar a data
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data ={
          nome: addData.nome,
          ocorrido: addData.ocorrido,
          createdAt: timestamp
      }
      chamadoRef
          .add(data)
          .then(()=>{
              setAddData({nome: '',ocorrido: ''})
              Keyboard.dismiss();
          })
          .catch((error)=>{
              alert(error)
          })
  }
}