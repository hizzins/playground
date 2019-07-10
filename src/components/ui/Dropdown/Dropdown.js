import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { Button } from 'components';
import './Dropdown.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);
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

  toggleMenu = (e) => {
    console.log('클릭', e.target, this.dropDown, this.dropDown.contains(e.target));
    const { dropDown } = this;
    const { isOpen } = this.state;
    if (dropDown.contains(e.target)) {
      const newState = !isOpen;
      this.setState({ isOpen: newState });
    }
  };

  hideMenu = (e) => {
    const { dropDown } = this;
    if (!dropDown.contains(e.target)) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { toggleMenu } = this;
    const { isOpen } = this.state;
    const { id, children, type, title, customClass } = this.props;

    return (
      <div
        id={id}
        className={`wrap-drop-down ${customClass} ${isOpen ? 'opened' : ''}`}
        ref={(ref) => {
          this.dropDown = ref;
        }}
      >
        <Button customClass="drop-down-title" type="transparent" onClick={toggleMenu}>
          {title}
        </Button>
        {isOpen ? <div className={`wrap-drop-list ${type}`}>{children}</div> : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  id: PropTypes.string,
  title: PropTypes.element.isRequired,
  type: PropTypes.string,
  children: PropTypes.element.isRequired,
  customClass: PropTypes.string,
};

Dropdown.defaultProps = {
  id: '',
  type: 'left',
  customClass: '',
};

export default Dropdown;
