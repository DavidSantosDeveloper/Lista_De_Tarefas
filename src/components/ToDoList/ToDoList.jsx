import { useContext } from 'react'
import {ToDoListContext} from './../../context/ToDoListContext'
import MensagemNotTarefa from './../MensagemNotTarefa/MensagemNotTarefa'
import ItemList from '../ItemList/ItemList'
import InputCadrastroTarefa from '../Form/InputCadrastroTarefa/InputCadrastroTarefa'

import './ToDoList.css'

export default function ToDoList() {

    let {lista}=useContext(ToDoListContext)
    
  return (
    <>
    <main>
        <h1 tabIndex={1}>Lista de Tarefas</h1>
        <InputCadrastroTarefa></InputCadrastroTarefa>
        

        <section className='listaTarefas'>
            
            {lista.length>0?
                <>
                    <ItemList></ItemList>
                </>
            
            :
                <>
                    <MensagemNotTarefa></MensagemNotTarefa>
                </>

            }
           
        </section>

    </main>  
    </>
  )
}
