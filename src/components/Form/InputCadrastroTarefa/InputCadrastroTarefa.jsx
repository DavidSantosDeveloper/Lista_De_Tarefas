import { useContext } from 'react'
import {ToDoListContext} from './../../../context/ToDoListContext'
import './InputCadrastroTarefa.css'

export default function InputCadrastroTarefa() {

  let {adicionarItem,novoItem,setNovoItem,lista,setLista}=useContext(ToDoListContext)
  return (
    <>
      <form action="" onSubmit={(evento)=>{adicionarItem(evento,novoItem,setLista,setNovoItem,lista)}}>
            <input type="text" value={novoItem} onChange={(evento)=>setNovoItem(evento.target.value)} tabIndex={2} placeholder='Adicione uma tarefa...' name="" id="" />
            <button type="submit"  tabIndex={3} id='adicionar_tarefa'>Adicionar tarefa</button>
      </form>

    </>
  )
}
