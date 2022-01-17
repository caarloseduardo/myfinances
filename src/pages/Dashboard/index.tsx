import React from 'react';
import {
  FiChevronLeft, FiChevronRight, FiTrendingUp, FiTrendingDown,
} from 'react-icons/fi';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlinePlus } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { HiOutlinePencilAlt } from 'react-icons/hi';

import {
  Container, KpisContainer, KpiContainer, Table,
} from './styles';

import defaultTheme from '../../assets/styles/themes/default';

const Dashboard: React.FC = () => (
  <Container>
    <KpisContainer>
      <KpiContainer>
        <div className="symbol-container green">
          <AiOutlineArrowUp size={20} />
        </div>

        <span className="label-container">Renda</span>

        <div className="amount-container">
          <h1>R$ 5.000,00</h1>
          <FiTrendingUp
            size={24}
            color={defaultTheme.colors.semantic.green}
          />
        </div>
      </KpiContainer>

      <KpiContainer>
        <div className="symbol-container red">
          <AiOutlineArrowDown size={20} />
        </div>

        <span className="label-container">Contas</span>

        <div className="amount-container">
          <h1>R$ 300,00</h1>
          <FiTrendingDown
            size={24}
            color={defaultTheme.colors.semantic.red}
          />
        </div>
      </KpiContainer>

      <KpiContainer>
        <div className="symbol-container yellow">
          <AiOutlineArrowUp size={20} />
        </div>

        <span className="label-container">Saldo restante</span>

        <div className="amount-container">
          <h1>R$ 4.700,00</h1>
          <FiTrendingUp
            size={24}
            color={defaultTheme.colors.semantic.yellow}
          />
        </div>
      </KpiContainer>
    </KpisContainer>

    <Table>
      <button type="button">
        <AiOutlinePlus size={20} color="#fff" />
      </button>

      <h1>Transações</h1>

      <div className="table-head">
        <div className="columns">
          <div className="column1" />
          <div className="column2">
            <span>Descrição</span>
          </div>
          <div className="column3">
            <span>Valor</span>
          </div>
          <div className="column4">
            <span>Data</span>
          </div>
          <div className="column5" />
          <div className="column6" />
        </div>
      </div>

      <div className="table-body">
        <div className="row">
          <div className="columns">
            <div className="column1">
              <AiOutlineArrowDown
                size={18}
                color={defaultTheme.colors.semantic.red}
              />
            </div>
            <div className="column2">
              <span>Conta de água</span>
            </div>
            <div className="column3">
              <span className="amount red">- R$ 300,00</span>
            </div>
            <div className="column4">
              <span>17 Dez, 2021</span>
            </div>
            <div className="column5">
              <HiOutlinePencilAlt
                size={18}
                color={defaultTheme.colors.secondary.light}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="column6">
              <BiTrashAlt
                size={18}
                color={defaultTheme.colors.secondary.light}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="columns">
            <div className="column1">
              <AiOutlineArrowUp
                size={18}
                color={defaultTheme.colors.semantic.green}
              />
            </div>
            <div className="column2">
              <span>Pagamento</span>
            </div>
            <div className="column3">
              <span className="amount green">+ R$ 5.000,00</span>
            </div>
            <div className="column4">
              <span>5 Dez, 2021</span>
            </div>
            <div className="column5">
              <HiOutlinePencilAlt
                size={18}
                color={defaultTheme.colors.secondary.light}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="column6">
              <BiTrashAlt
                size={18}
                color={defaultTheme.colors.secondary.light}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span className="registers">2 registros</span>
        <div className="paginator">
          <FiChevronLeft
            size={20}
            style={{ cursor: 'pointer' }}
          />
          <span>1 | 5</span>
          <FiChevronRight
            size={20}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </footer>
    </Table>
  </Container>
);

export default Dashboard;
