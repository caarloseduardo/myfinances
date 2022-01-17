import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 460px;
  height: 370px;

  padding: 18px 26px;

  position: relative;

  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;

  h1 {
    font-size: 1.125rem;
  }
`;

export const FormContainer = styled.div`
  margin-top: 24px;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 14px;
  right: 26px;

  button {
    width: 94px;
    height: 44px;

    &.label-button {
      background: transparent;
    }

    background: ${({ theme }) => theme.colors.secondary.main};
    border-radius: 4px;

    span {
      font-size: 0.875rem;
      font-weight: 600;
      color: #fff;
    }
  }
`;
