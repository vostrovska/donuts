
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount} from './redux/counter';


function App() {

  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>How many donuts you can eat at once?</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
    </div>
  );
}

export default App;
