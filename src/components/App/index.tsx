import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Routes from '../../routes';

import Drawer from '../Drawer';

import { Container, Content } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Drawer />

          <Content>
            <Routes />
          </Content>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
