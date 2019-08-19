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
    <Switch>
      <Route path='/Resume' component={() => <PageTemplate title="Resume"><ResumePage /></PageTemplate>} />
      <Route exact path='/' component={() => <PageTemplate><ListPage /></PageTemplate>} />
      <Route path='/carousel' component={() => <PageTemplate><CarouselPage /></PageTemplate>} />
      <Route path='/counter' component={() => <PageTemplate><CounterPage /></PageTemplate>} />
      <Route path='/editor' component={() => <PageTemplate><RichEditorPage /></PageTemplate>} />
      <Route path='/file-uploader' component={() => <PageTemplate><FileUploaderPage /></PageTemplate>} />
      <Route path='/slide' component={() => <PageTemplate><SlidePage /></PageTemplate>} />
      <Route path='/stack' component={() => <PageTemplate><StackPage /></PageTemplate>} />
      <Route path='/toast' component={() => <PageTemplate><ToastPage /></PageTemplate>} />
      <Route path='/todo' component={() => <PageTemplate><TodoPage /></PageTemplate>} />
      <Route path='/WebrtcCameraPage' component={() => <PageTemplate><WebrtcCameraPage /></PageTemplate>} />
      <Route path='/youtube' component={() => <PageTemplate><YoutubePage /></PageTemplate>} />
      <Route component={() => <PageTemplate><NotFoundPage /></PageTemplate>} />
    </Switch>


  );
};

export default App;
