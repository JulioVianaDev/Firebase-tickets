import { chamadoRef } from "../helpers/chamadosRef";
export const deleteChamado = (chamados)=>{
  chamadoRef
      .doc(chamados.id)
      .delete()
      .then(()=>{
          alert('deletado com sucesso')
      })
      .catch(error=>{
          alert(error);
      })
}