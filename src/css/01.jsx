import React, { PureComponent } from "react";
import Header from './header/index'
import Content from './content/index'

export class App extends PureComponent {
  render() {
    return (
        <>
            <Header />
            <Content />
        </>
    )
  }
}

export default App;
