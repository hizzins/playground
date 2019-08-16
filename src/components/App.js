import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  CarouselPage,
  CounterPage,
  FileUploaderPage,
  ListPage,
  NotFoundPage,
  ResumePage,
  RichEditorPage,
  SlidePage,
  StackPage,
  ToastPage,
  TodoPage,
  YoutubePage,
  WebrtcCameraPage
} from 'pages';
import { PageTemplate } from 'components/common';

const App = () => {
  return (
    <div>
      <PageTemplate />
      <div className="wrap-contents">
        <Switch>
          <Route path='/Resume' component={ResumePage} />
          <Route exact path='/' component={ListPage} />
          <Route path='/carousel' component={CarouselPage} />
          <Route path='/counter' component={CounterPage} />
          <Route path='/editor' component={RichEditorPage} />
          <Route path='/file-uploader' component={FileUploaderPage} />
          <Route path='/slide' component={SlidePage} />
          <Route path='/stack' component={StackPage} />
          <Route path='/toast' component={ToastPage} />
          <Route path='/todo' component={TodoPage} />
          <Route path='/WebrtcCameraPage' component={WebrtcCameraPage} />
          <Route path='/youtube' component={YoutubePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

    </div>
  );
};

export default App;
