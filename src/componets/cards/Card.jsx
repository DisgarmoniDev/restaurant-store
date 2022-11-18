import CardBtn from '../btns/CardBtn'
import './card.scss'

export default function Card({ id, url, title, description, price, volume, click ,handleLink, content }) {
  return (
    <div className='card' onClick={handleLink}>
      <img className='card__img' src={url} alt="" />
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
      <div className="card__bottom">
        <div className="card__bottom-price">
          <p> {price} ₽  <span>{volume}</span></p>
        </div>
        <CardBtn
          content={content}
          handelClick={(e)=>{
            e.stopPropagation()
            click()
          }} />
      </div>
    </div>
  )
}
