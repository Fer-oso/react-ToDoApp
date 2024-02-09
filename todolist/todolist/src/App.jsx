import { Header } from "./components/Header"
import { ToDoListApp } from "./components/ToDoListApp"

function App() {

  return (
    <>

      <Header />
      <div className="container">
      <ToDoListApp/>
      </div>
    </>

  )
}

export default App
