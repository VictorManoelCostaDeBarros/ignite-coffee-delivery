import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";


export const Container = styled.div`
  width: 100%;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 5%;

  width: 100%;

  h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.438rem;

    display: flex;
    align-items: center;

    margin-top: 2.5rem;

    color: ${(props) => props.theme['brown-600']};
  }
`;

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 40rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;

  margin-bottom: 12px;
`;

export const OrderAddressTitle = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.313rem;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme['brown-600']};

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`;

export const OrderAddressSubTitle = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;

  margin-left: 24px;

  display: flex;
  align-items: center;

  /* Base/Text */

  color: ${(props) => props.theme['brown-300']};
`;

export const Form = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

interface InputProps {
  width: string;
  optional: boolean;
}

export const OptionInputContainer = styled.div`
  position: relative;

  span {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;

    color: ${(props) => props.theme['brown-100']};

    position: absolute;
    right: -15px;
    top: calc(50% - 0.35rem);
    transform: translateX(calc(-50%));
  }
`;

export const Input = styled.input<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 4px;

  width: ${(props) => props.width}rem;
  height: 2.625rem;


  background: ${(props) => props.theme['gray-200']};


  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;


  color: ${(props) => props.theme['brown-100']};

  ${(props) => props.optional === true && css`
    padding-right: 65px;
  `};
`;

export const PaymentTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface PaymentTypeProps {
  isActive: boolean;
}

export const PaymentType = styled.div<PaymentTypeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 10px;

  width: 11.167rem;

  ${(props) => props.isActive && css`
    border: 1px solid ${props.theme['purple-700']};
  `};

  background: ${(props) => props.isActive ? props.theme['purple-100'] : props.theme['gray-300']};
  border-radius: 6px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.188rem;

    text-transform: uppercase;

    color: ${(props) => props.theme['brown-300']};
  }
`;

export const CoffeeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 24px;

  width: 28rem;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
`;

export const Coffee = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 20px;

  img {
    with: 4rem;
    height: 4rem;
  }

`;

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 4.5rem;
  height: 2rem;

  background: ${(props) => props.theme['purple-100']};
  border-radius: 6px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border:none;
    outline:none;
    background: ${(props) => props.theme['purple-100']};
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.313rem;

    text-align: center;

    /* Base/Title */

    color: ${(props) => props.theme['brown-900']};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

`;

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  /* width: 5rem; */
  height: 2rem;

  background: ${(props) => props.theme['purple-100']};
  border-radius: 6px;

  border: 0;


  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme['brown-300']};

  }

`;

export const Price= styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;

  display: flex;
  align-items: center;
  align-self: flex-start;
  text-align: right;
  align-content: flex-end;

  color: ${(props) => props.theme['brown-300']};

  `;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E6E5E5;
`;

export const Totalizer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;

`;

export const SubTotal = styled.div`
   width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: ${(props) => props.theme['brown-300']};
  }

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;

    color: ${(props) => props.theme['brown-300']};
  }
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['brown-600']};
  }

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['brown-600']};
  }
`;

export const Confirmation = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  text-decoration: none;

  width: 23rem;
  height: 2.875rem;

  border: 0;

  background: ${(props) => props.theme['yellow-500']};
  border-radius: 6px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.375rem;

    text-transform: uppercase;

    color: #FFFFFF;
    font-stretch: 100;
  }
`;