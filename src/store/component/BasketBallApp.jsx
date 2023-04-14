import React from 'react'
import BasketBal from './BasketBal'
import { useSelector } from "react-redux"

const BasketBallApp = () => {
    const {product} = useSelector(store=> store.basket)
  return (
      <>
          <div className="ballbasket">
            
          {product.map(item =>
        
              <BasketBal
                  key={new Date().getTime + Math.random}
                  name={item.name}
                  count={item.count}
              />
        )}
        </div>
    </>
  )
}

export default BasketBallApp
