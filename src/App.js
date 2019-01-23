import React, { Component } from 'react';
import { GlobalStyle } from './style.js';
import Header from './common/header/index';
import { GlobalStyle_Icon} from './statics/iconfont/iconfont.js';

class App extends Component {
  render() {
    return (
      <div className="jin">
       <GlobalStyle/>
       <GlobalStyle_Icon />
        <Header/>
        
      </div>
    );
  }
}

export default App;
