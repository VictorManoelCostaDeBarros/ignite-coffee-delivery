import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus, ShoppingCart } from 'phosphor-react'

import { defaultTheme } from "../../styles/themes/default";
import { CoffeeReducerInitialState, ICoffee, updateCoffeeQuantity } from '../../reducer/Coffee';

import { Actions, CartButton, Components, Container, Counter, Footer } from "./styles";

interface CoffeeProps {
  coffee: ICoffee;
}

export function Coffee({ coffee }: CoffeeProps) {
  const dispatch = useDispatch()

  function handleChangeQuantity(quantity: number) {
    if(quantity < 0) {
      quantity = 0
    }
    dispatch(updateCoffeeQuantity({ id: coffee.id, quantity }))
  }

  return (
    <Container>
      <img src={coffee.image} alt="café americano" />
      <Components>
        {coffee.tags.map(tag => (
          <span>{tag}</span>
        ))}
      </Components>
      <h2>{coffee.title}</h2>
      <span>{coffee.description}</span>
      <Footer>
        <span>R$ <strong>{coffee.price}</strong></span>
        <Actions>
          <Counter>
            <button onClick={() => handleChangeQuantity(coffee.quantity - 1)}>
              <Minus size={18} color={defaultTheme['purple-700']}/>
            </button>
            <span>{coffee.quantity}</span>
            <button  onClick={() => handleChangeQuantity(coffee.quantity + 1)}>
              <Plus size={18} color={defaultTheme['purple-700']} />
            </button>
          </Counter>
          <CartButton to="/checkout">
            <ShoppingCart weight="fill" color="#FFF" size={20} />
          </CartButton>
        </Actions>
      </Footer>
    </Container>
  )
}