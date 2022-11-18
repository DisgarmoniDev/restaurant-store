import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../store/reducers/userSlise'

export default function Header({ titleProducts }) {

  const dispatch = useDispatch()

  const priceBasket= useSelector(state => state.basket.priceBasket)
  const countProduct= useSelector(state => state.basket.countProduct)

  function titleProducts (countProduct) {
    if (countProduct === 1) {
      return 'товар'
    } else if (countProduct >1 && countProduct<5) {
      return 'товара'
    } else {
      return 'товаров'
    }
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Наша продукция</h1>
      <div className="header__baskets">
        <div className="header__baskets_basket">
          <p className='header__baskets_basket-info'> {countProduct} {titleProducts(countProduct)} <br />
          на сумму {priceBasket}</p>
          
          <Link to='/basket'><button className='header__baskets_basket-btn'></button></Link>
        </div>
        <div className="header__baskets_btn">
          <Link to='/'><button onClick={()=> dispatch(removeUser())} className="headBtn">Выйти</button></Link>
        </div>
      </div>
    </header>
  )
}