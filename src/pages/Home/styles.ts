import styled from 'styled-components';

export const Container = styled.div`
  main {
    padding: 5.625rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    div {

      h1 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 3rem;
        line-height: 3.875rem;

        color: ${(props) => props.theme['brown-900']};

        margin-bottom: 1rem;
      }

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.625rem;
        color: ${(props) => props.theme['brown-600']};
        font-stretch: 100;
        margin-bottom: 4.125rem;

      }
    }

    img {
      width: 29.75rem;
      height: 22.5rem;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  algin-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;

  div {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    margin-bottom: 1.25rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.313rem;
    color: ${(props) => props.theme['brown-300']};
  }
`;

interface ItemCircleProps {
  color: 'yellow-700' | 'yellow-500' | 'purple-500' | 'brown-300';
}

export const ItemCircle = styled.span<ItemCircleProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background ${(props) => props.theme[props.color]}
`;

export const CoffeeListContainer = styled.section`
  margin-bottom: 2rem;
  h3 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    line-height: 2.625rem;
    margin-bottom: 3.375rem;
  }

`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
`;