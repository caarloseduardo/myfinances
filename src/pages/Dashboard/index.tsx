import React from 'react';

import { Container, KpisContainer, KpiContainer } from './styles';

import arrowSvg from '../../assets/images/arrow-up.svg';
import trendingUpGreen from '../../assets/images/trending-up-green.svg';
import trendingUpYellow from '../../assets/images/trending-up-yellow.svg';
import trendingDown from '../../assets/images/trending-down.svg';

const Dashboard: React.FC = () => (
  <Container>
    <KpisContainer>
      <KpiContainer>
        <div className="symbol-container green">
          <img src={arrowSvg} alt="Arrow" />
        </div>

        <span className="label-container">Renda</span>

        <div className="amount-container">
          <h1>R$ 5.000,00</h1>
          <img src={trendingUpGreen} alt="Trending up" />
        </div>
      </KpiContainer>

      <KpiContainer>
        <div className="symbol-container red">
          <img src={arrowSvg} alt="Arrow" className="arrow-down" />
        </div>

        <span className="label-container">Contas</span>

        <div className="amount-container">
          <h1>R$ 300,00</h1>
          <img src={trendingDown} alt="Trending up" />
        </div>
      </KpiContainer>

      <KpiContainer>
        <div className="symbol-container yellow">
          <img src={arrowSvg} alt="Arrow" />
        </div>

        <span className="label-container">Saldo restante</span>

        <div className="amount-container">
          <h1>R$ 4.700,00</h1>
          <img src={trendingUpYellow} alt="Trending up" />
        </div>
      </KpiContainer>
    </KpisContainer>
  </Container>
);

export default Dashboard;
