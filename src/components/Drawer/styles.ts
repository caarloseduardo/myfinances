import styled from 'styled-components';

export const Container = styled.div`
  width: 312px;
  height: 100%;
  padding: 56px 0;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary.main};
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 8px;

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;

    &::after {
      content: "$";
      color: ${({ theme }) => theme.colors.semantic.green};
    }
  }
`;

export const ItemContainer = styled.div`
  width: 264px;
  height: 66px;

  margin-top: 48px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 22px;

  background: ${({ theme }) => theme.colors.purple};
  border-radius: 12px;
  cursor: pointer;

  h2 {
    font-size: 1.25rem;
  }
`;

export const Footer = styled.div`
  width: 266px;

  bottom: 66px;
  position: absolute;

  border-top: 1px solid #fff;

  h1 {
    font-size: 1.25rem;
    font-weight: 800;
    text-transform: uppercase;

    &::after {
      content: "$";
      color: ${({ theme }) => theme.colors.semantic.green};
    }
  }
`;
