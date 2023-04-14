
import { useDispatch } from 'react-redux'
import './style.css'
import { POINT1, POINT2, POINT3 } from '../countSlice'

const BasketBal = ({ name, count }) => {
  const dispatch = useDispatch()

  return (
    <>
      
        <div className="team">    
            <h2>{name}</h2>
            <h1>{count}</h1>
            <div className="home-btn">
              
            <ul>
                <li><button onClick={() => dispatch(POINT1({ name }))}>1 point</button></li>    
                <li><button onClick={() => dispatch(POINT2({ name }))}>2 point</button></li>
                <li><button onClick={() => dispatch(POINT3({ name }))}>3 point</button></li>
            </ul>
          </div>
        </div>
                     
      
    </>
  )
}

export default BasketBal
