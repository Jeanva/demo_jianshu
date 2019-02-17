import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';

import { GlobalStyle } from './style.js';
import { GlobalStyleIcon} from './statics/iconfont/iconfont.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="jin">
       <GlobalStyle/>
       <GlobalStyleIcon />
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path='/login' exact component = {Login}></Route>
            <Route path='/write' exact component = {Write}></Route>
          </div>
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
