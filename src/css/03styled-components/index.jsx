import React, { PureComponent } from "react";
import { DivWrapper, MyBtnWrapper } from "./style.js";

export class index extends PureComponent {
  constructor() {
    super();

    this.state = {
      size: 30,
    };
  }
  render() {
    const { size } = this.state;

    return (
      <DivWrapper size={size}>
        <div className="header">header</div>
        <div className="content">content</div>
        <div className="test">test</div>
        <MyBtnWrapper>123</MyBtnWrapper>
      </DivWrapper>
    );
  }
}

export default index;
