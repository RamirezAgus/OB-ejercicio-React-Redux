import './App.css'
import TodoContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

const App = () => {
  return (
    <>
      <TodoContainer/>
      <TodoFormContainer/>
      <FilterOptions/>
    </>
  )
}

export default App
