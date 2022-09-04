import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
`;

export const Location = styled(HeaderContentContainer)`
  width: 8.938rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-700']};

  span {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
`;

export const Cart = styled(HeaderContentContainer)`
  position: relative;
  width: 2.375rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['yellow-100']};
  
  a {
    width: 100%;
    height: 100%;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['yellow-700']};
  }
`;

export const Badge = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  isolation: isolate;

  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: -8.35px;
  top: -8px;

  border-radius: 100%;
  background: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme['background']};
  font-size: 0.875rem;
`;