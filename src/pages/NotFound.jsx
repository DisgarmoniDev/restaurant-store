import './styles/NotFound.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='NotFound'>
      <span>404</span>
      <p>Страница не найдена</p>
      <Link to={'/'}><button>Вернуться на главную страницу</button></Link>
    </div>
  )
}
