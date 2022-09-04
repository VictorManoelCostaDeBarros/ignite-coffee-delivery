import { createSlice } from '@reduxjs/toolkit'

import americano from '../../assets/americano.png';
import expresso from '../../assets/expresso.png';
import cremoso from '../../assets/expresso-cremoso.png';
import gelado from '../../assets/cafe-gelado.png';
import leite from '../../assets/cafe-com-leite.png';
import latte from '../../assets/latte.png';
import capuccino from '../../assets/capuccino.png';
import macchiato from '../../assets/macchiato.png';
import mocaccino from '../../assets/mocaccino.png';
import quente from '../../assets/chocolate-quente.png';
import cubano from '../../assets/cubano.png';
import havaiano from '../../assets/havaiano.png';
import arabe from '../../assets/arabe.png';
import irlandes from '../../assets/irlandes.png';
import { IUpdateAddressInformation, IUpdateCoffeeQuantity, IUpdatePaymentType } from './actions';

export interface ICoffee {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
}

export const Coffees: ICoffee[] = [
  {
    id: 1,
    image: expresso,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 2,
    image: americano,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 3,
    image: cremoso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: 9.99,
    quantity: 0,

  },
  {
    id: 4,
    image: gelado,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 5,
    image: leite,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com leite'],
    price: 9.99,
    quantity: 0,

  },
  {
    id: 6,
    image: latte,
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com leite'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 7,
    image: capuccino,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 8,
    image: macchiato,
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 9,
    image: mocaccino,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: 9.99,
    quantity: 0,

  },
  {
    id: 10,
    image: quente,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Especial', 'Com leite'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 11,
    image: cubano,
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'alcoólico', 'gelado'],
    price: 9.99,
    quantity: 0,

  },
  {
    id: 12,
    image: havaiano,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
    price: 9.99,
    quantity: 0,

  },
  {
    id: 13,
    image: arabe,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
    price: 9.99,
    quantity: 0,
  },
  {
    id: 14,
    image: irlandes,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'alcoólico'],
    price: 9.99,
    quantity: 0,
  },
]


export interface ICoffee {
  image: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
}

export interface AddressInformation {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

export type paymentTypeProps = 'CREDIT' | 'DEBIT' | 'MONEY' | null;

export interface CoffeeReducerInitialState {
  coffees: ICoffee[];
  addressInformation: AddressInformation;
  paymentType: paymentTypeProps
}

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState: {
    coffees: Coffees,
    addressInformation: ({} as AddressInformation),
    paymentType: (null as paymentTypeProps)
  },
  reducers: {
    updateCoffeeQuantity: (state, action: IUpdateCoffeeQuantity) => {
      state.coffees.map(coffee => {
        if(coffee.id === action.payload.id) {
          coffee.quantity = action.payload.quantity
        }
      })
    },

    updateAddressInformation: (state, action: IUpdateAddressInformation) => {
      state.addressInformation = action.payload.addressInformation
    },

    updatePaymentType: (state, action: IUpdatePaymentType) => {
      state.paymentType = action.payload.paymentType
    }
  }
})

export const { updateCoffeeQuantity, updateAddressInformation, updatePaymentType } = coffeeSlice.actions;
export default coffeeSlice.reducer; 