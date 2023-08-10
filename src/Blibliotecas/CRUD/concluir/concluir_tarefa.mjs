export let concluirTarefa=(indice,lista,setLista)=>{
    let lista_auxiliar=[...lista]
    lista_auxiliar[indice].isCompleted=lista_auxiliar[indice].isCompleted==false? true:false
  
    setLista(lista_auxiliar)
  }
  