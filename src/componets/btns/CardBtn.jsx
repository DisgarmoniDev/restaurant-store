import './cardBtn.scss'

export default function CardBtn({ handelClick,content }) {
  return (
    <button onClick={handelClick} className='CardBtn'>{content}</button>
  )
}
