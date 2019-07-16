import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DialogBasic = ({ title, contents, children }) => (
  <Fragment>
    {title !== '' && <p className="title">{title}</p>}
    <div className="contents">{contents}</div>
    <div className="wrap-button">{children}</div>
  </Fragment>
);

DialogBasic.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

DialogBasic.defaultProps = {
  title: '',
};

export default DialogBasic;
