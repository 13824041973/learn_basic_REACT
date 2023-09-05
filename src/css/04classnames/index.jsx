import React, { PureComponent } from "react";
import classNames from "classnames";

export class index extends PureComponent {
  constructor() {
    super();

    this.state = {
      isA: true,
      isB: false,
    };
  }
  render() {
    const { isA, isB } = this.state;
    return (
      <div>
        <div className={classNames({ aaa: isA }, { bbb: isB })}>12356465</div>
      </div>
    );
  }
}

export default index;
