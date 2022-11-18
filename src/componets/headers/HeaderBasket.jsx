import BasketBtn from '../btns/BasketBtn'
import { Link } from 'react-router-dom'
import { removeUser } from '../../store/reducers/userSlise'
import { useDispatch} from 'react-redux'

export default function HeaderBasket() {
  const dispatch = useDispatch()
  return (
    <header className='header'>
      <Link to='/'><BasketBtn 
        iconBtn={<img src="img/arrow.svg" alt="" />}
      /></Link>
      <h1 className='header__title'>Корзина с выбранными товарами</h1>
      <div className="header__basket">
        <Link to='/'><button onClick={()=> dispatch(removeUser())} className="header__basket_btn">Выйти</button></Link>
      </div>
    </header>
  )
}