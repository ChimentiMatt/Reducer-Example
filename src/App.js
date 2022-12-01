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
        {/* Will increment only 1 value despite 50 loops */}
        <p>useState counter: {counter}</p> 
        {/* Will increment 50 times */}
        <p>useReducer counter: {state.money}</p>
        <button onClick={() => {increment()}}>Loop 50 times on both types of state</button>

    </div>
  );
}

export default App;
