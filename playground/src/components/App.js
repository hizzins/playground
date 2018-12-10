import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, CarouselPage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ListPage} />
        <Route path='/page/:page' component={ListPage} />
        <Route path='/tag/:tag/:page?' component={ListPage} />
        <Route path='/carousel' component={CarouselPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
