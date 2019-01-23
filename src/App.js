import React, { Component } from 'react';
import { Provider } from 'react-redux';
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
      </div>
      </Provider>
    );
  }
}

export default App;
