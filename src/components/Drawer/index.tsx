import React from 'react';

import {
  Container, LogoContainer, ItemContainer, Footer,
} from './styles';

import moneyLogo from '../../assets/images/money-logo.svg';
import dashboardSvg from '../../assets/images/dashboard.svg';

const Drawer: React.FC = () => (
  <Container>
    <LogoContainer>
      <img src={moneyLogo} alt="Logo" />

      <h1>my.finance</h1>
    </LogoContainer>

    <ItemContainer>
      <img src={dashboardSvg} alt="Dashboard" />

      <h2>Dashboard</h2>
    </ItemContainer>

    <Footer>
      <h1>my.finance</h1>
    </Footer>
  </Container>
);

export default Drawer;
