import './styles/MainPage.scss';
import Card from '../componets/cards/Card';
import Header from '../componets/headers/HeaderMain';
import { products } from '../data/cards';
import { useNavigate , Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductInBasket } from '../store/reducers/AddBasketItem'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from '../hooks/use-auth'


export default function MainPage() {
  const navigation = useNavigate()

  const dispatch = useDispatch()

  const {isAuth, email} = useAuth()

  const addProduc = ( id, idx, url, title, price) => {
  
    const itemAddProduct = {
      id: id,
      idx: idx,
      url: url,
      title: title,
      price: price,
    }
    dispatch(addProductInBasket(itemAddProduct))
    console.log(itemAddProduct)
  }

  const handleLink = (id) => {
    navigation(`../product/${id}`)
  }

  return isAuth ? (
    <div className="MainPage">
      <div className="conteinerMain">
        <Header />
        <main className="cards">
          {products.map(itemProduct => {
            return (
              <Card 
                key={itemProduct.id}
                id={itemProduct.id}
                click={() => {addProduc(itemProduct.id, uuidv4(), itemProduct.url, itemProduct.title, itemProduct.price )}}
                url={itemProduct.url}
                title={itemProduct.title}
                description={itemProduct.description}
                price={itemProduct.price}
                volume={itemProduct.volume}
                handleLink={()=>handleLink(itemProduct.id)}
                content={'+'}
              />
            )
          })}
        </main>
      </div>
    </div>
  ) : (
    <Navigate replace to="/login" />
  )
}