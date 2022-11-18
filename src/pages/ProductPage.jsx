import './styles/ProductPage.scss'
import Card from "../componets/cards/Card";
import HeaderProduct from "../componets/headers/HeaderProduct";
import { products } from "../data/cards";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from "react";

import { useDispatch } from 'react-redux'
import { addProductInBasket } from '../store/reducers/AddBasketItem'

import { v4 as uuidv4 } from 'uuid'

export default function ProductPage() {

  const params = useParams()

  const navigation = useNavigate()
  const dispatch = useDispatch()

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

  const idProduct = () => {
    const item = products.find(i => i.id == params.id)
    if (item) {
      return (
        <Card 
          key={item.id}
          id={item.id}
          url={item.url}
          title={item.title}
          description={item.description}
          price={item.price}
          volume={item.volume}
          click={() => {addProduc(item.id, uuidv4(), item.url, item.title, item.price )}}
          content={'В корзину'}
        />
      )
    }
  }

  const checNotProduct = (id) => {
    if (!products.find(i => i.id == id)){
      navigation(`/notProduct`)
    }
  }
  useEffect(()=> {
    checNotProduct(params.id)
  }, [])


  return (
    <div className="ProductPage">
      <HeaderProduct />
      <main className="cardProduct">
        {idProduct()}
    </main>
    </div>
  )
}
