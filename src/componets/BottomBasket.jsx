import { useSelector } from 'react-redux'

export default function BottomBasket({  }) {
  const priceBasket= useSelector(state => state.basket.priceBasket)
  return (
    <div className="conteiner">
      <footer className='footer'>
        <div className="footer__total">
          <h2 className='footer__total-title'>Заказ на сумму: </h2>
          <p className='footer__total-sum'>{priceBasket} ₽</p>
        </div>
        <button className='footer__btn'>Оформить заказ</button>
        </footer>
    </div>
    
  )
}