export function buttonShow(elemento_html,funcao_de_ajuste_textarea,permicao_especial_pra_ajustar_textarea){
    let textarea_correspondente=elemento_html.parentNode.previousElementSibling
    
    if(elemento_html.textContent=='Mostrar todo o conteúdo'){
        funcao_de_ajuste_textarea(textarea_correspondente,permicao_especial_pra_ajustar_textarea)
        elemento_html.textContent='Minimizar o conteúdo'
    }
    else{
        textarea_correspondente.style.height=`auto`
        elemento_html.textContent='Mostrar todo o conteúdo'
    }

}

export function verifica_se_o_texto_precisa_de_um_butao_show(elemento_html){
    
    let altura_do_texto=elemento_html.scrollHeight
    console.log(altura_do_texto)
    if(altura_do_texto<=60){
        return false
    }
    else{
        return true
    }
}