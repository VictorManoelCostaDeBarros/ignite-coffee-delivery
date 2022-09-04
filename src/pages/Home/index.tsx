import { CoffeeList, CoffeeListContainer, Container, ItemCircle, ItemContainer } from "./styles";
import { ShoppingCart, Timer, Package, Coffee as CoffeeIcon } from 'phosphor-react'
import { useSelector } from "react-redux";

import banner  from '../../assets/banner.png';

import { Coffee } from "../../components/Coffee";
import { CoffeeReducerInitialState } from "../../reducer/Coffee";

export function Home() {
  const { coffees } = useSelector((state: { coffee: CoffeeReducerInitialState }) => state.coffee);

  return (
    <Container>
      <main>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <ItemContainer>
            <div>
              <ItemCircle color="yellow-700">
                <ShoppingCart weight="fill" size={16} color="#FFF" />
              </ItemCircle>
                Compra simples e segura
            </div>

            <div>
              <ItemCircle color="brown-300">
                <Package weight="fill" size={16} color="#FFF" />
              </ItemCircle>
                Embalagem mantém o café intacto
            </div>

            <div>
              <ItemCircle color="yellow-500">
                <Timer weight="fill" size={16} color="#FFF" />
              </ItemCircle>
                Entrega rápida e rastreada
            </div>

            <div>
              <ItemCircle color="purple-500">
                <CoffeeIcon weight="fill" size={16} color="#FFF" />
              </ItemCircle>
                O café chega fresquinho até você
            </div>
          </ItemContainer>
        </div>

        <img src={banner} alt="" />
      </main>

      <CoffeeListContainer>
        <h3>Nossos cafés</h3>
        <CoffeeList>
          {
            coffees.map(coffee => (
              <Coffee key={coffee.id} coffee={coffee} />
            ))
          }
        </CoffeeList>
      </CoffeeListContainer>
    </Container>
  )
}