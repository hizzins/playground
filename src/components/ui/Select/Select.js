import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/common/Button';
import styles from './Select.module.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = { isOpen: false };
  }

  componentDidMount() {
    const { hideMenu } = this;
    document.body.addEventListener('click', hideMenu);
  }

  componentWillUnmount() {
    const { hideMenu } = this;
    document.body.removeEventListener('click', hideMenu);
  }

  toggleOption = (e) => {
    const { name } = this;
    const { isOpen } = this.state;
    if (document.getElementById(name).contains(e.target)) {
      const newState = !isOpen;
      this.setState({ isOpen: newState });
    }
  };

  hideMenu = (e) => {
    const { name } = this;
    if (document.getElementById(name) && !document.getElementById(name).contains(e.target)) {
      this.setState({ isOpen: false });
    }
  };

  onSelect = (e, valueID) => {
    const { onChange } = this.props;
    onChange(valueID);
  };

  render() {
    const { toggleOption, onSelect } = this;
    const { isOpen } = this.state;
    const { name, value, valueID, size, customClass, children } = this.props;

    return (
      <div className={`select ${styles.boxSelect} ${customClass} ${size !== '' ? styles[size] : ''}`}>
        <Button id={name} customClass={`box-value ${size}`} type="transparent" size="auto" onClick={toggleOption}>
          <div className="text">{value}</div>
          <div className="icon">▼</div>
        </Button>
        <div className={`box-option ${isOpen ? 'open' : ''}`}>
          {children.map((option) => {
            const id = option.props.valueID;
            return (
              <Button
                key={id}
                type="transparent"
                size="auto"
                customClass={`option-item ${id === valueID ? 'selected' : ''}`}
                onClick={(e) => {
                  onSelect(e, id);
                }}
              >
                {option.props.children}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  valueID: PropTypes.string,
  customClass: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

Select.defaultProps = {
  value: '선택해 주세요.',
  valueID: '',
  customClass: '',
  size: '',
};

export default Select;
