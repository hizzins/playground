import React from 'react';
import './PageTemplate.scss';
import Header from 'components/common/Header';

const PageTemplate = ({title, children}) => (
  <div>
    <Header title={title} />
    <div className="wrap-contents">
      {children}
    </div>
  </div>
);

export default PageTemplate;
