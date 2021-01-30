import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import BlogV2 from './blog-v2/Blog'


class App extends Component {
  render() {
    return (
      <div>
        <BlogV2 />
      </div>
    );
  }
}

export default App;
