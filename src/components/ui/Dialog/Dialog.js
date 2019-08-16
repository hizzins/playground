import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DialogBasic from './DialogBasic';
import styles from './Dialog.module.scss';

class Dialog extends Component {
  componentDidMount() {
    const { dialogWrap, onEscEvent } = this;

    document.body.addEventListener('keyup', onEscEvent);

    setTimeout(() => {
      dialogWrap.classList.add(styles.on);
    }, 0);
  }

  componentWillUnmount() {
    const { onEscEvent } = this;
    document.body.removeEventListener('keyup', onEscEvent);
  }

  onEscEvent = (e) => {
    const { onHide } = this.props;
    if (e.keyCode === 27) onHide();
  };

  onKeyUp = (e) => {
    e.preventDefault();
  };

  render() {
    const { onKeyUp } = this;
    const { type, title, contents, children, size, onHide } = this.props;
    console.log('여기', children);
    return ReactDOM.createPortal(
      <div
        className={styles.dialogWrap}
        ref={(ref) => {
          this.dialogWrap = ref;
        }}
      >
        <div
          className="dialog-bg"
          role="button"
          tabIndex={0}
          onKeyUp={onKeyUp}
          onClick={() => {
            onHide();
          }}
        />
        <div className={`dialog ${size}`}>
          {type === 'basic' ? (
            <DialogBasic title={title} contents={contents}>
              {children}
            </DialogBasic>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>,
      document.getElementById('place-dialog')
    );
  }
}

Dialog.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  contents: PropTypes.string,
  children: PropTypes.node.isRequired,
  onHide: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  type: 'basic',
  size: 'regular',
  title: '',
  contents: '',
};

export default Dialog;