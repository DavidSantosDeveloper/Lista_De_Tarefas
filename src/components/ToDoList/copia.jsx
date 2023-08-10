
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