import ToDoList from '../../components/ToDoList/ToDoList'
import { ToDoListProvider } from '../../context/ToDoListContext'
import './Home.css'

function App() {


  return (
    <>
      <ToDoListProvider>
           <ToDoList></ToDoList>
      </ToDoListProvider>
    </>
  )
}

export default App
