import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 44px;

  padding: 0 16px;

  background: ${({ theme }) => theme.colors.primary.light};
  color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary.main};
  }
`;
