import { MapPin, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CoffeeReducerInitialState, updateAddressInformation, updateCoffeeQuantity, updatePaymentType } from "../../reducer/Coffee";
import { defaultTheme } from "../../styles/themes/default";
import { Actions, Coffee, CoffeeBox, Confirmation, Container, Counter, DeleteButton, Divider, Form, Input, OptionInputContainer, Order, OrderAddressSubTitle, OrderAddressTitle, OrderBox, PaymentType, PaymentTypeContainer, Price, SubTotal, Total, Totalizer } from "./styles";

export function Checkout() {
  const { coffees } = useSelector((state: { coffee: CoffeeReducerInitialState }) => state.coffee);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const coffeesInCart = coffees.filter(coffee => coffee.quantity > 0)
  const totalItensCoffees = coffees.reduce((prev, current) => prev + (current.quantity * current.price), 0)
  const totalDelivery = 3.99

  const [zipCode, setZipCode] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [paymentType, setPaymentType] = useState<'CREDIT' | 'DEBIT' | 'MONEY' | null>(null)

  function handleChangeQuantity(id: number, quantity: number) {
    if(quantity < 0) {
      quantity = 0
    }
    dispatch(updateCoffeeQuantity({ id, quantity }))
  }


  function handleCreateOrder() {
    if(zipCode === '' ||  street === '' || number === '' || district === '' || city === '' || uf === '' || paymentType === null) {
      return alert('Preencha todos os dados para que possamos fazer o pedido!')
    }

    if(coffeesInCart.length <= 0) {
      return alert('Tenha pelo menos um café para fazer o pedido!')
    }

    dispatch(updateAddressInformation({
      addressInformation: {
        zipCode,
        city,
        complement,
        district,
        number,
        street,
        uf
      }
    }))

    dispatch(updatePaymentType({ paymentType }))

    navigate('/success')
  }

  return (
    <Container>
      <Order>
        <div>
          <h3>Complete seu pedido</h3>
          <OrderBox>
            <div>
              <OrderAddressTitle><MapPin weight="light" size={22} /> Endereço de entrega</OrderAddressTitle>
              <OrderAddressSubTitle>Informe o endereço onde deseja receber seu pedido</OrderAddressSubTitle>
            </div>

            <Form>
              <Input 
                width="12.5" 
                placeholder="CEP"
                optional={false}
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
              />

              <Input 
                width="35" 
                placeholder="Rua"
                optional={false}
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />

              <Input 
                width="12.5"
                placeholder="Número"
                optional={false}
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
              <OptionInputContainer>
                <Input 
                  width="21.50" 
                  placeholder="Complemento"
                  optional={true}
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                />
                <span>Opcional</span>
              </OptionInputContainer>

              <Input 
                width="12.5" 
                placeholder="Bairro"
                optional={false}
                value={district}
                onChange={(event) => setDistrict(event.target.value)}
              />
              <Input 
                width="16.75" 
                placeholder="Cidade"
                optional={false}
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <Input 
                width="3.75"
                placeholder="UF"
                maxLength={2}
                optional={false}
                value={uf}
                onChange={(event) => setUf(event.target.value)}
              />
            </Form>
          </OrderBox>

          <OrderBox>
            <div>
              <OrderAddressTitle><CurrencyDollar weight="light" size={22} color="#8047F8" />  Pagamento</OrderAddressTitle>
              <OrderAddressSubTitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</OrderAddressSubTitle>
            </div>

            <PaymentTypeContainer>
              <PaymentType 
                isActive={paymentType === 'CREDIT'}
                onClick={() => setPaymentType('CREDIT')}
              >
                <CreditCard weight="light" size={20} color="#8047F8"/>
                <span>Cartão de credito</span>
              </PaymentType>

              <PaymentType 
                isActive={paymentType === 'DEBIT'}
                onClick={() => setPaymentType('DEBIT')}
              >
                <Bank weight="light" size={20} color="#8047F8"/>
                <span>Cartão de debito</span>
              </PaymentType>

              <PaymentType 
                isActive={paymentType === 'MONEY'}
                onClick={() => setPaymentType('MONEY')}
              >
                <Money weight="light" size={20} color="#8047F8"/>
                <span>Dinheiro</span>
              </PaymentType>
            </PaymentTypeContainer>
          </OrderBox>
        </div>

        <div>
        <h3>Cafés selecionados</h3>
        <CoffeeBox>
          {
            coffeesInCart.map(coffee => (
              <>
                <Coffee>
                  <img src={coffee.image} alt={coffee.title} />
      
                  <div>
                    <span>{coffee.title}</span>
                    <Actions>
                      <Counter>
                        <button
                          onClick={() => handleChangeQuantity(coffee.id, coffee.quantity - 1)}
                        >
                          <Minus size={18} color={defaultTheme['purple-700']}/>
                        </button>
                        <span>{coffee.quantity}</span>
                        <button
                          onClick={() => handleChangeQuantity(coffee.id, coffee.quantity + 1)}
                        >
                          <Plus size={18} color={defaultTheme['purple-700']} />
                        </button>
                      </Counter>
      
                      <DeleteButton
                        onClick={() => dispatch(updateCoffeeQuantity({ id: coffee.id, quantity: 0 }))}
                      >
                        <Trash size={18} color={defaultTheme['purple-700']}/>
                        <span>Remover</span>
                      </DeleteButton>
                    </Actions>
                  </div>
      
                  <Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(coffee.price)}</Price>
                </Coffee>
                <Divider/>
              </>
            ))
          }
          <Totalizer>
            <SubTotal>
              <span>Total de itens</span>
              <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalItensCoffees)}</strong>
            </SubTotal>

            <SubTotal>
              <span>Entrega</span>
              <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalDelivery)}</strong>
            </SubTotal>

            <Total>
              <span>Total</span>
              <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalItensCoffees + totalDelivery)}</strong>
            </Total>
          </Totalizer>

          <Confirmation
            onClick={handleCreateOrder}
          >
            <span>Confirmar pedido</span>
          </Confirmation>
        </CoffeeBox>
        </div>
      </Order>
    </Container>
  )
}