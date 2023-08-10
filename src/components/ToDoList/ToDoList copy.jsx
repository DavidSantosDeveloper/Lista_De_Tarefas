import { useEffect, useRef, useState } from 'react'
import butao_delete from './../../assets/button_delete.svg'
//import ItemList from '../ItemList/ItemList'

import './ToDoList.css'

export default function ToDoList() {
    //recuperando dados do local storage
    let listaDeTarefasNoLocalStorage=localStorage.getItem('listaDeTarefas')

    let [lista,setLista]=useState(listaDeTarefasNoLocalStorage?JSON.parse(listaDeTarefasNoLocalStorage):[])
    let [novoItem,setNovoItem]=useState('')
    let numeroDoTabIndex=useRef(4)

    let adicionarItem=(evento)=>{
        evento.preventDefault()

        if(novoItem==false){
            return
        }
        else{
            setLista([...lista,{text:novoItem,isCompleted:false}])
        }
        
        setNovoItem('')
    }
    let concluirTarefa=(indice)=>{
        let lista_auxiliar=[...lista]
        lista_auxiliar[indice].isCompleted=lista_auxiliar[indice].isCompleted==false? true:false

        setLista(lista_auxiliar)
    }

    let deletarTarefa=(indice)=>{

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

    let editarTarefa=(elemento_html)=>{
        let lista_auxiliar=[...lista]
        elemento_html.previousElementSibling.parentNode.previousElementSibling.removeAttribute('readonly')
        elemento_html.textContent='Salvar'
        
    }
    let salvarTarefaEditada=(elemento_html,indice)=>{
        let lista_auxiliar=[...lista]
        let valor_textarea_correspondente=(elemento_html.previousElementSibling).parentNode.previousElementSibling.value
        console.log(valor_textarea_correspondente)
        lista_auxiliar[indice].text=valor_textarea_correspondente
        elemento_html.textContent='Editar'

        elemento_html.previousElementSibling.parentNode.previousElementSibling.setAttribute('readonly','')
        setLista(lista_auxiliar)
    }

    useEffect(()=>{
        numeroDoTabIndex.current+=1
    })
    useEffect(()=>{
        localStorage.setItem('listaDeTarefas',JSON.stringify(lista))
    },[lista])

  return (
    <>
    <main>
        <h1 tabIndex={1}>Lista de Tarefas</h1>

        <form action="" onSubmit={adicionarItem}>
            <input type="text" value={novoItem} onChange={(evento)=>setNovoItem(evento.target.value)} tabIndex={2} placeholder='Adicione uma tarefa...' name="" id="" />
            <button type="submit" tabIndex={3} id='adicionar_tarefa'>Adicionar tarefa</button>
        </form>

        <section className='listaTarefas'>
            
            {lista.length>0?
                <>
                {lista.map((item,index)=>(
                    <div key={index}  tabIndex={numeroDoTabIndex.current}  className={item.isCompleted==true? 'item completo':'item' }>
                        <p tabIndex={numeroDoTabIndex.current+1}>{item.text} </p>
                        <textarea name="" id="" className='texto_tarefa' readOnly>{item.text}</textarea>
                        {
                            console.log(typeof numeroDoTabIndex.current)
                        }
                        <section>
                            <button tabIndex={numeroDoTabIndex.current+2} onClick={()=>{deletarTarefa(index)}} >Deletar</button>
                            <button tabIndex={numeroDoTabIndex.current+3} onClick={(evento)=>{evento.target.textContent=="Editar"?editarTarefa(evento.target):salvarTarefaEditada(evento.target,index)}}>Editar</button>
                            <button tabIndex={numeroDoTabIndex.current+4} onClick={()=>{concluirTarefa(index)}}>Concluir</button>
                        </section>
                        
                    </div>

       ))

       }
                </>
            
            :
                <>

                    <figure id="notTarefa" aria-label="simbolo 'check'que reprsenta que nao ha tarefas no momento">
                        <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 12A7.25 7.25 0 0 1 12 4.75v0A7.25 7.25 0 0 1 19.25 12v0A7.25 7.25 0 0 1 12 19.25v0A7.25 7.25 0 0 1 4.75 12v0Z"></path>
                            <path d="m9.75 12.75.434.924a1 1 0 0 0 1.772.073L14.25 9.75"></path>
                        </svg>
                        <figcaption>Não há tarefas no momento.</figcaption>
                    </figure>
                </>

            }
           
           
        </section>

    </main>  
    </>
  )
}
