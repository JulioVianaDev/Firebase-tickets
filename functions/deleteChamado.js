export const deleteChamado = (todos)=>{
  chamadoRef
      .doc(todos.id)
      .delete()
      .then(()=>{
          alert('deletado com sucesso')
      })
      .catch(error=>{
          alert(error);
      })
}