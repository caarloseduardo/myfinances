import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 0;
`;

export const KpisContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const KpiContainer = styled.div`
  width: 100%;
  max-width: 260px;
  height: 140px;

  padding: 20px 24px;

  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;

  .symbol-container {
    width: 42px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    .arrow-down {
      transform: rotate(180deg);
    }

    &.green {
      background: ${({ theme }) => theme.colors.semantic.green};
    }

    &.red {
      background: ${({ theme }) => theme.colors.semantic.red};
    }

    &.yellow {
      background: ${({ theme }) => theme.colors.semantic.yellow};
    }
  }

  .label-container {
    display: block;
    margin-top: 6px;

    span {
      font-size: 0.875rem;
    }
  }

  .amount-container {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.125rem;
    }
  }
`;
