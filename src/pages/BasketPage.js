import './styles/BasketPage.scss';
import Card from '../componets/cards/Card';
import HeaderBasket from '../componets/headers/HeaderBasket';
import BottomBasket from '../componets/BottomBasket';
import { useSelector, useDispatch } from 'react-redux'
import { deletionProductInBasket } from '../store/reducers/AddBasketItem'
import { useNavigate } from 'react-router-dom'


export default function BasketPage() {

  const basket= useSelector(state => state.basket.basket)

  const navigation = useNavigate()
  const dispatch = useDispatch()

  const deletionProduc = (idx) => {
    dispatch(deletionProductInBasket(idx))
  }

  const handleLink = (id) => {
    navigation(`../product/${id}`)
  }

  return (
    <div className="BasketPage">
      <div className="conteinerBasket">
        <HeaderBasket />
        <main className="cards">
          {basket.map(addedProduct => {
            return (
              <Card 
                key={addedProduct.idx}
                id={addedProduct.id}
                url={addedProduct.url}
                title={addedProduct.title}
                price={addedProduct.price}
                click={() => {deletionProduc(addedProduct.idx)}}
                handleLink={()=>handleLink(addedProduct.id)}
                content={'+'}
              />
            )
          })}
        </main>
      </div>
      <BottomBasket />
    </div>
  );
}