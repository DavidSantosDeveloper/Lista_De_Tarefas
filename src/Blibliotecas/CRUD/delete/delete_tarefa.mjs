export let deletarTarefa=(indice,lista,setLista)=>{

    function lista_sem_um_elemento_de_indice_n(lista,indice_n){
        let lista_nova=[]
        for (let indice = 0; indice < lista.length; indice++) {
            if(indice!=indice_n){
                lista_nova.push(lista[indice])
            }         
        }
        return lista_nova
    }
  
    let lista_atualizada=lista_sem_um_elemento_de_indice_n(lista,indice)
    setLista(lista_atualizada)
  }