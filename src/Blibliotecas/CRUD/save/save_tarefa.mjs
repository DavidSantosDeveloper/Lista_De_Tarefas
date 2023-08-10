export let salvarTarefaEditada=(elemento_html,indice,lista,setLista)=>{
    let lista_auxiliar=[...lista]
    let valor_textarea_correspondente=(elemento_html.previousElementSibling).parentNode.previousElementSibling.value
    console.log(valor_textarea_correspondente)
    lista_auxiliar[indice].text=valor_textarea_correspondente
    elemento_html.textContent='Editar'
  
    elemento_html.previousElementSibling.parentNode.previousElementSibling.setAttribute('readonly','')
    setLista(lista_auxiliar)
  }