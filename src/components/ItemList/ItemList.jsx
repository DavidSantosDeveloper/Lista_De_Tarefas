import { useContext } from 'react'
import { ToDoListContext } from '../../context/ToDoListContext'
import ButtonShowTotalContent from '../ButtonShowTotalContent/ButtonShowTotalContent'

import "./ItemList.css"

export default function ItemList() {


  let {lista,setLista,numeroDoTabIndex,deletarTarefa,editarTarefa,salvarTarefaEditada,concluirTarefa,ajustar_linhas_da_textarea}=useContext(ToDoListContext)

  return (
    <>
     
      {
        lista.map((item,index)=>(
            <>
                <div key={index}  tabIndex={numeroDoTabIndex.current}  className={item.isCompleted==true? 'item completo':'item' }>
                      <textarea tabIndex={numeroDoTabIndex.current+1}   onKeyUp={(evento)=>{ajustar_linhas_da_textarea(evento.target)}}  name="" id="" className='texto_tarefa' defaultValue={item.text}  readOnly></textarea>
                    
                      <section id='secao_de_butoes'>
                          <button className='deleteButton' tabIndex={numeroDoTabIndex.current+2} onClick={()=>{deletarTarefa(index,lista,setLista)}} >Deletar</button>
                          <button className='editButton' tabIndex={numeroDoTabIndex.current+3} onClick={(evento)=>{evento.target.textContent=="Editar"?editarTarefa(evento.target,lista):salvarTarefaEditada(evento.target,index,lista,setLista)}}>Editar</button>
                          <button className='finishButton'   tabIndex={numeroDoTabIndex.current+4} onClick={()=>{concluirTarefa(index,lista,setLista)}}>Concluir</button>
                          <ButtonShowTotalContent tabIndex={numeroDoTabIndex.current+5}></ButtonShowTotalContent>
                      </section>

                      
                                    
                </div>

                </>
                ))
                    }
    </>
  )
}
