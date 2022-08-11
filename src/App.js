import './App.css'
import ColorComponent from './components/Color'
import CounterComponent from './components/Counter'
import ComponentWithFragment from './components/WithFragment'
import SuperSimpleComponent from './components/Simple'

function App() {
  return (
    <div className='App-header'>
      <ColorComponent />
      <CounterComponent />
      <ComponentWithFragment />
      <SuperSimpleComponent />
    </div>
  )
}

export default App
