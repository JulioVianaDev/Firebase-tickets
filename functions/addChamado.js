import { chamadosRef } from '../helpers/chamadosRef';
import { Keyboard } from 'react-native';
import { DataAtual } from '../helpers/DataAtual';
export const addChamado=(addData,setAddData)=>{
  if (addData.nome && addData.nome.length>0){
      //pegar a data
      let timestamp = DataAtual();
      const data ={
          nome: addData.nome,
          ocorrido: addData.ocorrido,
          createdAt: timestamp
      }
      chamadosRef
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