
import { useDispatch } from 'react-redux';
import './App.css';
import BasketBallApp from './store/component/BasketBallApp';
import { RESET } from './store/countSlice';

function App() {
  const dispatch = useDispatch()
  return (
    <>
      <div className='App'>
        <h2>basket ball game</h2>
        <button className='btn' onClick={()=> dispatch(RESET())}>RESET</button>
        <BasketBallApp/>
      </div>
    </>
  );
}

export default App;
