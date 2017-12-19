import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import { increaseDepth } from "./actions";
import RecursiveTree from "./RecursiveTree/RecursiveTree";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (parent, e) => {
    e.preventDefault();
    this.props.dispatch(increaseDepth(parent, { name: "New Child" }));
  };

  render() {
    const { children } = this.props;

    return (
      <Grid columns={1} divided>
        <Grid.Column>
          <Header as="h2">Recursive</Header>
          <RecursiveTree onAddChild={this.handleClick} children={children} />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  children: state.containerReducer.structure
});

export default connect(mapStateToProps)(Container);
