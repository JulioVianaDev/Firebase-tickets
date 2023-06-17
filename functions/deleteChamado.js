import { chamadosRef } from "../helpers/chamadosRef";
export const deleteChamado = (chamados)=>{
  chamadosRef
      .doc(chamados.id)
      .delete()
      .then(()=>{
          alert('deletado com sucesso')
      })
      .catch(error=>{
          alert(error);
      })
}