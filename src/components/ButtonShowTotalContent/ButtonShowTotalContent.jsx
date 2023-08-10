import { useContext } from 'react'
import { ToDoListContext } from '../../context/ToDoListContext'
import './ButtonShowTotalContent.css'

export default function ButtonShowTotalContent(){
    let {buttonShow,ajustar_linhas_da_textarea}=useContext(ToDoListContext)

    return (
        
        <>  
    
            
            <button className='showButton' onClick={(evento)=>{buttonShow(evento.target,ajustar_linhas_da_textarea,true)}}>Mostrar todo o conteúdo</button>
            
            
    
    
        </>
    
    
    )
}