import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Table = styled.div`
  width: 100%;
  max-width: 900px;
  height: 712px;

  position: relative;

  padding: 34px 32px;
  margin-top: 34px;

  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;

  h1 {
    font-size: 1.5rem;
  }

  button {
    width: 50px;
    height: 50px;

    position: absolute;
    right: -15px;
    top: -15px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.colors.secondary.main};
    border-radius: 100%;
  }

  .table-head {
    padding-bottom: 8px;
    margin-top: 32px;

    border-bottom: 1px solid #fff;

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.fonts.dark}
    }
  }

  .table-body {
    padding-top: 8px;

    .row {
      display: flex;
      align-items: center;

      & + .row {
        margin-top: 4px;
      }
    }

    span {
      font-size: 0.75rem;
      font-weight: 300;
    }

    .amount {
      font-weight: 600;

      &.red {
        color: ${({ theme }) => theme.colors.semantic.red}
      }
      &.green {
        color: ${({ theme }) => theme.colors.semantic.green}
      }
    }
  }

  .columns {
    width: 100%;
    display: flex;
    align-items: center;

    .column1 {
      width: 60px;
      display: flex;
      justify-content: center;
    }
    .column2 {
      width: 25%;
    }
    .column3 {
      width: 25%;
    }
    .column4 {
      width: calc(50% - 80px);
    }
    .column5 {
      width: 40px;
      display: flex;
      justify-content: center;
    }
    .column6 {
      width: 40px;
      display: flex;
      justify-content: center;
    }
  }

  footer {
    width: 100%;
    position: absolute;
    bottom: 34px;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 0.875rem;

      &.registers {
        position: absolute;
        left: 0;
      }
    }

    .paginator {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
  }
`;
