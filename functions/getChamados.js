import { chamadosRef } from "../helpers/chamadosRef"

export function getChamados(setChamados) {
  chamadosRef
  .orderBy('createdAt','desc')
  .onSnapshot(
      querySnapShot=>{
          const chamados = []
          querySnapShot.forEach((doc)=>{
              const {nome,ocorrido} = doc.data()
              chamados.push({
                  id: doc.id,
                  nome,
                  ocorrido
              })
          })
          setChamados(chamados)
      }
  )
}