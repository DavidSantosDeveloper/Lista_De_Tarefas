import './MensagemNotTarefa.css'
export default function MensagemNotTarefa() {
  return (
    <>
        <figure id="notTarefa" aria-label="simbolo 'check'que reprsenta que nao ha tarefas no momento">
            <svg  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 12A7.25 7.25 0 0 1 12 4.75v0A7.25 7.25 0 0 1 19.25 12v0A7.25 7.25 0 0 1 12 19.25v0A7.25 7.25 0 0 1 4.75 12v0Z"></path>
                <path d="m9.75 12.75.434.924a1 1 0 0 0 1.772.073L14.25 9.75"></path>
            </svg>

            <figcaption>Não há tarefas no momento.</figcaption>
         </figure>
    </>
  )
}
