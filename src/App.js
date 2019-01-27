import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header/index';
import store from './store';

import { GlobalStyle } from './style.js';
import { GlobalStyleIcon} from './statics/iconfont/iconfont.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="jin">
       <GlobalStyle/>
       <GlobalStyleIcon />
        <Header/>
        <BrowserRouter>
          <div>
            <Route path="/" exact render={()=><div>home</div>}></Route>
            <Route path="/detail" exact render={()=><div>detail</div>}></Route>
          </div>
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
