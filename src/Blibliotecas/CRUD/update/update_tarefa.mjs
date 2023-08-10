export let editarTarefa=(elemento_html,lista)=>{
    let lista_auxiliar=[...lista]
    elemento_html.previousElementSibling.parentNode.previousElementSibling.removeAttribute('readonly')
    elemento_html.textContent='Salvar'
    
}