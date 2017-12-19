import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { increaseDepth } from "./actions";
import { Button, Icon } from "semantic-ui-react";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  createTreeRecursive(data, isSub) {
    let children = [];

    for (let child of data) {
      if (child.children) {
        children.push(
          <ol>
            <li>{child.name}</li>
            {this.createTreeRecursive(child.children, true)}
          </ol>
        );
      } else {
        const item = (
          <ol>
            <li>{child.name}</li>
          </ol>
        );
        children = [...children, item];
      }
    }
    return <div>{children}</div>;
  }

  render() {
    const list = this.createTreeRecursive(this.props.structure, false);

    return <div>{list}</div>;
  }
}

const mapStateToProps = state => ({
  structure: state.containerReducer.structure
});

export default connect(mapStateToProps)(Container);
