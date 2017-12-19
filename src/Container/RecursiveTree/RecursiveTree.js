import React from "react";
import { List } from "semantic-ui-react";
import { connect } from "react-redux";

class RecursiveTree extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <List>
        {children.map(child => (
          <List.Item key={child.id}>
            <List.Icon name="folder" />
            <List.Content>
              <List.Header>{child.name}</List.Header>
              <List.Description
                as="a"
                onClick={e => this.props.onAddChild(child, e)}
              >
                + Add child
              </List.Description>
              {child.children && (
                <RecursiveTree
                  onAddChild={this.props.onAddChild}
                  children={child.children}
                />
              )}
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

export default RecursiveTree;
