import { useState, useReducer } from 'react'

function App() {
  const [counter, setCounter ] = useState(0)
  const [state, dispatch] = useReducer(reducer, {money: 0 })

  function reducer(state,action){
    if (action.type === 'add'){
      return {
        money: state.money + 1
      }
    }
    throw Error('Unknown action.');
  }
  
  const increment = () => {
    for (let i = 0; i < 50; i++){
      dispatch({ type: 'add'})
      setCounter(counter +1)
   
    }
  }

  return (
    <div className="App">
        <h1>Reducer Example</h1>
        <h4>Both variables will go through 50 loops that attempts to increment on click. Only the reducer adds to previous state </h4>
        <p>State counter: {counter}</p>
        <p>Reducer counter: {state.money}</p>
        <button onClick={() => {increment()}}>Add Money</button>

    </div>
  );
}

export default App;
