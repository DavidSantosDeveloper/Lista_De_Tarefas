import { createContext,useState,useRef,useEffect} from "react";

import {adicionarItem} from './../Blibliotecas/CRUD/create/create_tarefa.mjs'
import {deletarTarefa} from './../Blibliotecas/CRUD/delete/delete_tarefa.mjs'
import {concluirTarefa} from './../Blibliotecas/CRUD/concluir/concluir_tarefa.mjs'
import {salvarTarefaEditada} from './../Blibliotecas/CRUD/save/save_tarefa.mjs'
import {editarTarefa} from './../Blibliotecas/CRUD/update/update_tarefa.mjs'
import {ajustar_linhas_da_textarea} from './../Blibliotecas/utils/ajustar_tamanho_da_textarea/ajustar_linhas_da_textarea.mjs'
import {buttonShow,verifica_se_o_texto_precisa_de_um_butao_show} from "./../Blibliotecas/buttonShow/buttonShow.mjs"

export let ToDoListContext=createContext()

export let ToDoListProvider=({children})=>{
    //recuperando dados do local storage
    let listaDeTarefasNoLocalStorage=localStorage.getItem('listaDeTarefas')

    let [lista,setLista]=useState(listaDeTarefasNoLocalStorage?JSON.parse(listaDeTarefasNoLocalStorage):[])
    let [novoItem,setNovoItem]=useState('')
    let numeroDoTabIndex=useRef(4)

    useEffect(()=>{
        numeroDoTabIndex.current+=1
    })
    useEffect(()=>{
        localStorage.setItem('listaDeTarefas',JSON.stringify(lista))
    },[lista])
    

    return(
        <ToDoListContext.Provider value={{lista,setLista,novoItem,setNovoItem,numeroDoTabIndex,adicionarItem,deletarTarefa,concluirTarefa,salvarTarefaEditada,editarTarefa,ajustar_linhas_da_textarea,buttonShow,verifica_se_o_texto_precisa_de_um_butao_show}}>
            {children}
        </ToDoListContext.Provider>
    )
}