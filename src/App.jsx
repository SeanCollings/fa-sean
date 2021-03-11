import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './components/pages/home-page';
import { store } from './state';

const SAppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Proxima Nova', 'Helvetica Neue', Helvetica, Helvetica, Arial,
    sans-serif;
`;
const SBodyContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  padding: 1.5rem 1.5rem 0;
`;

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SAppContainer>
        <BrowserRouter>
          <Header />
          <SBodyContainer>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          </SBodyContainer>
          <Footer />
        </BrowserRouter>
      </SAppContainer>
    </ReduxProvider>
  );
};

export default App;
