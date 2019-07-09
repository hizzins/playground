import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import './StackPage.scss'
import { Stack } from 'helpers';

class StackPage extends Component {
  constructor(props) {
    super(props);
    const stack = new Stack();
    // console.log('++여기', Stack.push);
    stack.push("jeong");
    stack.push("pro");
    stack.push("blog");
    console.log(stack.peek());//blog , top = 2;
    console.log(stack.pop());//blog , top = 1;
    console.log(stack.pop());//pro , top = 0;
    console.log(stack.pop());//jeong , top = -1;
    console.log(stack.pop());//null, top = -1;
  }
  render() {
    return (
      <div className="page">
        <h2>스택</h2>
        <h4>Features</h4>
        <ul>
          <li><MaterialIcon icon="check" size={12} />  </li>
          <li><MaterialIcon icon="check" size={12} />  </li>
        </ul>
      </div>
    )
  }
};

export default StackPage;
