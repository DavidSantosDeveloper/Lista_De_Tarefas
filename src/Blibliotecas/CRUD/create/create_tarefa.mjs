
export let adicionarItem=(evento,novoItem,setLista,setNovoItem,lista)=>{
   
    evento.preventDefault()
    
    if(novoItem==false){
        return
    }
    else{
        setLista([...lista,{text:novoItem,isCompleted:false}])
    }
    
    setNovoItem('')
}