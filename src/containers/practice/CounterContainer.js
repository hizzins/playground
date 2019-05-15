import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'store/modules/counter';
import { Counter } from 'components';

class CounterContainer extends Component {

  handleIncrement = () => {
    const { CounterActions } = this.props;
    CounterActions.increment();
  }

  handleDecrement = () => {
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }

  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;

    return (
      <Counter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}

export default connect(
  ({ counter }) => {console.log('여기+++', counter);return ({
    number: counter.number
  })},
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);
