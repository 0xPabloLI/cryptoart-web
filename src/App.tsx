import React from 'react';
import logo from './logo.svg';
import './App.css';


import CopyRight from './components/layout/copyright/index';
import {
  HashRouter,
  MemoryRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Layout } from 'antd';
import { Provider } from 'react-redux';

import Header from './components/header/header';

import store from './redux/store';

import MainLayout from './components/layout/layout/layout';

function App({ router = 'hash', routerConfigs = {} }) {
  const Router: any = router === 'memory' ? MemoryRouter : HashRouter;

  return (

    <Router {...routerConfigs}>
      <Provider store={store}>
        <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <Switch>
          <Route path={["/", "/regist"]}>
            <Header />
            <div>hhh</div>
            <Layout.Footer style={{ textAlign: 'center' }}>
                <CopyRight />
            </Layout.Footer>
          </Route>

        </Switch>
        </Layout>
      </Provider>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
