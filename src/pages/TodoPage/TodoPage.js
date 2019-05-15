import React, { Component } from 'react';
import { TodosContainer } from 'containers';
import './TodoPage.scss';

class TodoPage extends Component {
  render() {
    return (
      <div className="page counter-page">
        <TodosContainer />
        <h4>Redux를 파악하기 위한 Practice</h4>
      </div>
    )
  }
}

export default TodoPage;
