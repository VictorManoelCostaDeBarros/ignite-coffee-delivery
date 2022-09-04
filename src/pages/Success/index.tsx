import { Badge, Container, Detail, DetailContainer, Image, Main, SubTitle, Title } from "./styles";

import DeliveryBanner from '../../assets/delivery.png';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useSelector } from "react-redux";
import { CoffeeReducerInitialState } from "../../reducer/Coffee";

enum PaymentType {
  CREDIT = 'Cartão de Crédito',
  DEBIT = 'Cartão de Debito',
  MONEY = 'Dinheiro'
}

export function Success() {
  const { addressInformation, paymentType } = useSelector((state: { coffee: CoffeeReducerInitialState }) => state.coffee);


  return (
    <Container>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
      <Main>
        <DetailContainer>
          <Detail>
            <Badge color={defaultTheme['purple-500']}>
              <MapPin weight="fill" size={22} color="#FFF" />
            </Badge>
            <div>
              <span>Enrega em <strong>{addressInformation.street}, {addressInformation.number}</strong></span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </Detail>

          <Detail>
            <Badge color={defaultTheme['yellow-500']}>
              <MapPin weight="fill" size={22} color="#FFF" />
            </Badge>
            <div>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min</strong></span>
            </div>
          </Detail>

          <Detail>
            <Badge color={defaultTheme['yellow-700']}>
              <CurrencyDollar weight="fill" size={22} color="#FFF" />
            </Badge>
            <div>
              <span>Pagamento na entrega</span>
              <span><strong>{PaymentType[paymentType!]}</strong></span>
            </div>
          </Detail>
        </DetailContainer>

        <Image src={DeliveryBanner} />
      </Main>
    </Container>
  )
}