import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../store/reducers/userSlise'

export default function HeaderProduct({ titleProducts }) {
   
  const priceBasket= useSelector(state => state.basket.priceBasket)

  const countProduct= useSelector(state => state.basket.countProduct)

  const navigation = useNavigate()
  const dispatch = useDispatch()

  function titleProducts (countProduct) {
    if (countProduct == 1) {
      return 'товар'
    } else if (countProduct >1 && countProduct<5) {
      return 'товара'
    } else {
      return 'товаров'
    }
  }

  return (
    <header className='header'>
      <div onClick={() => navigation(-1)}>
        <button className='navBtn'></button>
      </div>
      <div className="header__baskets">
        <div className="header__basket">
          <p className='header__basket-info'> {countProduct} {titleProducts(countProduct)} <br />
          на сумму {priceBasket}</p>
          <Link to='/basket'><button className='header__basket-btn'></button></Link>
        </div>
        <div className="header__baskets_btn">
          <Link to='/'><button onClick={()=> dispatch(removeUser())} className="headBtn">Выйти</button></Link>
        </div>
      </div>
    </header>
  )
}