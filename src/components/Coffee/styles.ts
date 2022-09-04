import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 16rem;
  height: 19.375rem;
  /* Base/Card */
  padding: 1.25rem;

  background: #F3F2F2;
  border-radius: 6px 36px;

  display: flex;

  align-items: center;
  flex-direction: column;

  padding-top: 7.5rem;

  margin: 40px 32px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    position: absolute;
    left: calc(50% - 120px/2);
    top: -20px;
  }

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;

    text-align: center;

    /* Base/Subtitle */

    color: ${(props) => props.theme['brown-600']};

    margin-bottom: 0.5rem;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;

    text-align: center;

    /* Base/Label */
    
    color: ${(props) => props.theme['brown-100']};
  }
`;

export const Components = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  margin-bottom: 1rem;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    background: ${(props) => props.theme['yellow-100']};
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 0.813rem;

    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-700']};
  }
`;

export const Footer = styled.div`
  margin-top: 2.063rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;

    text-align: right;

    color: ${(props) => props.theme['brown-300']};
    strong {
      font-family: 'Baloo 2';
      font-style: bold;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.938rem;

      text-align: right;

      color: ${(props) => props.theme['brown-600']};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const CartButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  border: 0;

  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['purple-700']};
  border-radius: 6px;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 4.5rem;
  height: 2.375rem;

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