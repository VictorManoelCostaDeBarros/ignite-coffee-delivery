import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 80px;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.625rem;

  color: ${(props) => props.theme['yellow-700']};
`;

export const SubTitle = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;

  color: ${(props) => props.theme['brown-600']};
  font-stretch: 100;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 4.375rem;

`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 32.875rem;
  height: 16.875rem;

  border: 1px solid ${(props) => props.theme['yellow-500']};

  border-radius: 6px 36px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;

  span {
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.313rem;

    color: ${(props) => props.theme['brown-300']};
  }
`;

interface BadgeProps {
  color: string;
}

export const Badge = styled.div<BadgeProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 2rem;
  height: 2rem;

  background: ${(props) => props.color};
  border-radius: 1000px;
`;

export const Image = styled.img`
  width: 30.75rem;
  height: 18.313rem;
`;