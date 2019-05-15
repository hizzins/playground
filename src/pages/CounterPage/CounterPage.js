import React, { Component } from 'react';
import { Counter } from 'components';
import { CounterContainer } from 'containers';
import MaterialIcon from 'material-icons-react';
import './CounterPage.scss'

class CounterPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page counter-page">
        <CounterContainer />
        <h4>Features</h4>
        <ul>
          <li><MaterialIcon icon="check" size={12} />  </li>
          <li><MaterialIcon icon="check" size={12} />  </li>
        </ul>
      </div>
    )
  }
};

export default CounterPage;
