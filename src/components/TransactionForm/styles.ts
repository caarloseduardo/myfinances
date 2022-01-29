import styled from 'styled-components';

export const Form = styled.form``;

export const ButtonsContainer = styled.footer`
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
