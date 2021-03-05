import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import GithubGists from "./GithubGists/GithubGists";


class App extends Component {
    render() {
      return (
        <GithubGists />
      );
    }
}

export default App;
