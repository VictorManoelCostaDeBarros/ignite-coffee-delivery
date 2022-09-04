import { Badge, Cart, HeaderContainer, Location } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from "react-router-dom";

import logo  from '../../assets/coffee-delivery.svg'
import { useSelector } from "react-redux";
import { CoffeeReducerInitialState } from "../../reducer/Coffee";

export function Header() {
  const { coffees } = useSelector((state: { coffee: CoffeeReducerInitialState }) => state.coffee);

  const coffeesQuantity = coffees.reduce((prev, current) => prev + current.quantity, 0)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>São Paulo, SP</span> 
        </Location>

        <Cart>
          <Badge>{coffeesQuantity}</Badge>
          <NavLink to="/checkout" title="Histórico">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </Cart>
      </nav>
    </HeaderContainer>
  )
}