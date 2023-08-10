export function ajustar_linhas_da_textarea(elemento_html,permicao_especial_pra_ajustar_textarea=false){

    
    if(elemento_html.readOnly==false){
        elemento_html.style.cssText=`height: ${elemento_html.scrollHeight}px;overflow-y:hidden;`
    
        elemento_html.addEventListener('input',()=>{
        elemento_html.style.height='auto'
        elemento_html.style.height=`${elemento_html.scrollHeight}px`
    })
    
    
    }

    else if(permicao_especial_pra_ajustar_textarea==true){
        elemento_html.style.cssText=`height: ${elemento_html.scrollHeight}px;overflow-y:hidden;`
    
        elemento_html.addEventListener('input',()=>{
        elemento_html.style.height='auto'
        elemento_html.style.height=`${elemento_html.scrollHeight}px`
    })
    
    }

      
}