import {firebase} from '../config'
export const DataAtual = ()=>{
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  return timestamp
}