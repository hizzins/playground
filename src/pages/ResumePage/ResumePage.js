import React, { Component } from 'react';
import './ResumePage.scss';
import { ProgressBar, Button } from 'components';
import Dialog from 'components/ui/Dialog';
import RedmineLogo from 'contents/image/redmine-logo.png';
import ZeplinLogo from 'contents/image/zeplin-logo.png';
import EslintLogo from 'contents/image/eslint-logo.png';
import PrettierLogo from 'contents/image/prettier-logo.png';
import SlackLogo from 'contents/image/slack-logo.png';
import MaterialIcon from 'material-icons-react';
import ResumeImages from './ResumeImages';

const DialogContents = ({video}) => {
  return (
    <div>
      <h3>이미지 보기</h3>
      {/*<img alt="이미지 보기" width="650" src={imageURL} />*/}

      <div className="wrap-video">
        <ProgressBar />
        <video width="650" autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
};

class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {dialog: {isVisible: false, content: ''}};
  }

  onShowDialog = (content) => {
    this.setState({dialog: {isVisible: true, content}});
  }

  onHideDialog = () => {
    console.log('onHide');
    this.setState({dialog: {isVisible: false}});
  }

  renderDialog = () => {
    const { onHideDialog } = this;
    const { content } = this.state.dialog;
    console.log('++여기', ResumeImages[content]);
    return (
      <Dialog
        size="large"
        customClass="resume-preview"
        contents={<DialogContents video={ResumeImages[content]} />}
        onHide={onHideDialog}>
        <button className="button cancel round" onClick={onHideDialog}>닫기</button>
      </Dialog>
    );
  }

  render() {
    const { onShowDialog, onHideDialog, renderDialog } = this;
    const { isVisible } = this.state.dialog;

    return (
      <div className="resume-page">
        {
          isVisible && renderDialog()
        }
        <h1>신희진 <span className="sub-title">Web Frontend developer</span></h1>
        <p className="introduce">
          안녕하세요. 웹 프론트엔드 개발자 신희진입니다.<br />
          UI 인터랙션에 관심이 많고 더 나은 디자인과 사용성을 갖춘 UI/UX를 구현하고자 노력하는 개발자입니다.<br />
          정형화된 것보다 참신하고 새로운 웹 인터페이스에 관심이 많습니다.<br />
          여러분야 사람들과 커뮤니케이션을 통해 더 나은 서비스로 발전시키는 것에 보람을 느끼며 일하고 있습니다.<br />
          아래 요약된 기술들은 업무시 주로 사용했던 기술들 요약이며 이밖에도 개인 프로젝트를 통해
          socket을 이용한 채팅프로그램 및 node, express, mongoDB를 이용하여 간단한 CRUD back-end API 개발 경험이 있습니다.
        </p>
        <h2>github URL</h2>
        <p>https://github.com/hizzins</p>
        <h2 className="sumary">Summary</h2>
        <h3 className="subject technologies">Technologies</h3>
        <p className="technologies-item"><span>HTML5</span> <span>CSS3</span> <span>javaScript</span> <span>jQuery</span> <span>ES6+</span> <span>React</span> <span>Redux</span> <span>Redux-thunk</span> <span>Sass</span> <span>gulp</span> <span>webpack</span></p>
        <h3 className="subject">Tools for collaboration</h3>
        <svg height="30" viewBox="0 0 1231 342" xmlns="http://www.w3.org/2000/svg" className="nav-logo">
          <g fill="none" fill-rule="evenodd">
            <g fill="#8C929D" className="wordmark">
              <path
                d="M764.367 94.13h-20.803l.066 154.74h84.155v-19.136h-63.352l-.066-135.603zM907.917 221.7c-5.2 5.434-13.946 10.87-25.766 10.87-15.838 0-22.22-7.797-22.22-17.957 0-15.354 10.637-22.678 33.332-22.678 4.255 0 11.11.472 14.655 1.18v28.586zm-21.51-93.787c-16.8 0-32.208 5.952-44.23 15.858l7.352 12.73c8.51-4.962 18.91-9.924 33.802-9.924 17.02 0 24.585 8.742 24.585 23.39v7.56c-3.31-.71-10.164-1.184-14.42-1.184-36.404 0-54.842 12.757-54.842 39.454 0 23.86 14.656 35.908 36.876 35.908 14.97 0 29.314-6.852 34.278-17.954l3.782 15.118h14.657v-79.14c0-25.04-10.874-41.815-41.84-41.815zM995.368 233.277c-7.802 0-14.657-.945-19.858-3.308v-71.58c7.093-5.908 15.84-10.16 26.95-10.16 20.092 0 27.893 14.174 27.893 37.09 0 32.6-12.53 47.957-34.985 47.957m8.742-105.364c-18.592 0-28.6 12.64-28.6 12.64V120.59l-.066-26.458H955.116l.066 150.957c10.164 4.25 24.11 6.613 39.24 6.613 38.768 0 57.442-24.804 57.442-67.564 0-33.783-17.26-56.227-47.754-56.227M538.238 110.904c18.438 0 30.258 6.142 38.06 12.285l8.938-15.477c-12.184-10.678-28.573-16.417-46.053-16.417-44.204 0-75.17 26.932-75.17 81.267 0 56.935 33.407 79.14 71.624 79.14 19.148 0 35.46-4.488 46.096-8.976l-.435-60.832V162.76h-56.734v19.135h36.167l.437 46.184c-4.727 2.362-13 4.252-24.11 4.252-30.73 0-51.297-19.32-51.297-60.006 0-41.34 21.275-61.422 52.478-61.422M684.534 94.13h-20.33l.066 25.988v89.771c0 25.04 10.874 41.814 41.84 41.814 4.28 0 8.465-.39 12.53-1.126v-18.245c-2.943.45-6.083.707-9.455.707-17.02 0-24.585-8.74-24.585-23.387v-61.895h34.04v-17.01H684.6l-.066-36.617zM612.62 248.87h20.33V130.747h-20.33v118.12zM612.62 114.448h20.33V94.13h-20.33v20.318z"></path>
            </g>
            <path d="M185.398 341.13l68.013-209.322H117.39L185.4 341.13z" fill="#E24329"
                  className="logo-svg-shape logo-dark-orange-shape"></path>
            <path d="M185.398 341.13l-68.013-209.322h-95.32L185.4 341.128z" fill="#FC6D26"
                  className="logo-svg-shape logo-orange-shape"></path>
            <path d="M22.066 131.808l-20.67 63.61c-1.884 5.803.18 12.16 5.117 15.744L185.398 341.13 22.066 131.807z"
                  fill="#FCA326" className="logo-svg-shape logo-light-orange-shape"></path>
            <path d="M22.066 131.808h95.32L76.42 5.735c-2.107-6.487-11.284-6.487-13.39 0L22.065 131.808z" fill="#E24329"
                  className="logo-svg-shape logo-dark-orange-shape"></path>
            <path d="M185.398 341.13l68.013-209.322h95.32L185.4 341.128z" fill="#FC6D26"
                  className="logo-svg-shape logo-orange-shape"></path>
            <path d="M348.73 131.808l20.67 63.61c1.884 5.803-.18 12.16-5.117 15.744L185.398 341.13 348.73 131.807z"
                  fill="#FCA326" className="logo-svg-shape logo-light-orange-shape"></path>
            <path d="M348.73 131.808h-95.32L294.376 5.735c2.108-6.487 11.285-6.487 13.392 0l40.963 126.073z"
                  fill="#E24329" className="logo-svg-shape logo-dark-orange-shape"></path>
          </g>
        </svg>
        <img src={RedmineLogo} className="redmine-logo" height="46px" alt="redmine logo" />
        <img src={ZeplinLogo} className="zeplin-logo" height="46px" alt="zeplin logo" />
        <img src={SlackLogo} className="slack-logo" height="46px" alt="zeplin logo" />
        <h3 className="subject">Tools for Quality</h3>
        <img src={EslintLogo} className="zeplin-logo" height="46px" alt="zeplin logo" />
        <img src={PrettierLogo} className="zeplin-logo" height="48px" alt="zeplin logo" />
        <h2>Experience</h2>
        <div className="experience">
          <div className="experience-content">
            <div className="left-info">
              <div className="company">(주)알서포트</div>
              <div className="term">2014.09 ~ 재직중</div>
            </div>
            <div className="right-info">
              <h4 className="job-subject">Remote Seminar 신규개발</h4>
              <div className="term">2019.04 ~ 2019.08</div>
              <p>Remote Seminar 신규 프로젝트를 진행하여 설계부터 컴포넌트 개발에 참여하였습니다.
                환경세팅은 CRA로 손쉽게 구축하고 추가 설정은 eject하지 않고 craco를 사용하여 파일의 복잡도를 높이지 않고 간단하게 추가설정 할 수 있었습니다.
                또한, 이번 프로젝트에서는 storybook을 검토 및 도입하여 재사용가능한 component에 중점을 두고 개발했습니다.
                storybook을 사용하면서는 컴포넌트에 propTypes를 작성하면 문서에 자동으로 기입되는 addon이 제공되어
                컴포넌트의 동작과 문서를 동시에 확인할 수 있어 다른사람이 작성한 컴포넌트도 비교적 손쉽게 파악이 가능해 공통으로 사용되는 컴포넌트에 효과적이였습니다.
                css 관련하여서는 CSS Module을 처음 사용하였는데 손쉬운 사용법으로 class 네이밍에 드는 에너지를 아낄 수 있었습니다.
                <p className="stack">React, immer, storybook, CSS Module</p>
              </p>

              <h4 className="job-subject">Remote Seminar Youtube 영상 공유 poc개발</h4>
              <div className="term">2019.03 ~ 2019.03</div>
              <p>Remotemeeting과 비슷한 화상세미나 신규 프로젝트의 youtube 영상을 공유하는 기능을 개발했습니다.
                화상 회의중 발표자가 유투브 url을 공유하면 참여자들의 화면에 영상이 나오게되며
                발표자가 일시정시, 음소거, 재생 건너뛰기등 액션에 따라 참여자들의 영상도 동일하게 컨트롤하는 기능입니다.
                <p className="stack">React, Youtube iframe, google api(youtube)</p>
              </p>

              <h4 className="job-subject">Remotemeeting 우리카드 서버납품</h4>
              <div className="term">2018.12 ~ 2019.02</div>
              <p>기존에 Remotemeeting 서비스를 우리카드사의 요구사항에 맞게 커스터 마이즈하는 작업을 했습니다.
                처음으로 하는 서버납품 서비스로 ASP와 서버납품의 구조설계 및 99개의 테마를 언어별로 관리할 수 있는 어드민 페이지를 신규 개발했습니다.
                서버납품은 보안에 민감한 프로젝트로 웹보안 관련하여 데이터를 서버에 전송시 태그는 엔티티코드로 치환하여 보내고
                입력란에 특수문자 입력을 제한하는 등의 작업을 했습니다.
                ckeditor의 데이터 또한 태그를 엔티티 코드로 치환해서 전송하였는데 에디터의 스타일을 위한 태그뿐만 아니라 사용자가 입력한 태그 또한 입력한 그대로
                화면에 보여주기 위해 고민하던중, 사용자가 입력한 태그는 엔티티코드를 살짝 변형하여 구분되도록 아이디어를 내어 사용자가 입력한 태그까지 완벽하게 구현하였습니다.
              </p>

              <h4 className="job-subject">Remotemeeting 예약 개발
                <Button type="transparent" size="auto" onClick={() => {onShowDialog('schedule')}}>
                  <MaterialIcon icon="image_search" size={30} />
                </Button>
              </h4>
              <div className="term">2018.09 ~ 2018.11</div>
              <p>화상회의를 예약하고 스케쥴을 관리할 수 있는 페이지입니다. 카드뷰와 테이블뷰 두가지 UI를 제공했으며
                카드뷰 페이지는 오늘날짜로 스크롤되어 상,하 스크롤시 추가 데이터 불러오는 기능을 구현하였습니다.
                위로 스크롤시 preppend형태로 데이터가 추가되는데 이때 데이터가 추가되기 전에 보던 위치로 스크롤을 조정해줘야 하는 이슈가 있었으나
                컴포넌트 업데이트시 이전 데이터의 최상위 정보를 상태값으로 관리하여 리액트 16버전에 추가된 생명주기인 getSnapshotBeforeUpdate를 사용하여
                스크롤을 유지하도록 구현하였습니다. 데이터 상태가 변경될때마다 컴포넌트가 업데이트되어 스크롤을 재조정해주는 부분에 있어 어려움을 겪었던 프로젝트 입니다.
              </p>
              <p className="stack">React, Redux, axios</p>

              <h4 className="job-subject">
                Remotemeeting 히스토리 개발
                <Button type="transparent" size="auto" onClick={() => {onShowDialog('history')}}>
                  <MaterialIcon icon="image_search" size={30} />
                </Button>
              </h4>

              <div className="term">2018.04 ~ 2018.08</div>
              <p>화상회의 중 기록한 데이터(회의록, 캡처이미지뷰어, 녹화뷰어)들을 관리하는 히스토리 페이지를 개발했습니다.
                복잡한 데이터나 array형태의 데이터인 경우 불변함을 유지하기 위해 까다로운 데이터가공이 필요했으나
                immer를 사용하고나서 훨씬 수월하게 상태관리를 할 수 있었습니다.
              </p>
              <p className="stack">React, Redux, axios, videojs, ckeditor, immer</p>

              <h4 className="job-subject">Remotemeeting 랜딩페이지 개발</h4>
              <div className="term">2017.11 ~ 2018.11</div>
              <p>랜딩페이지 개발 및 Remotemeeting 홈페이지 개발, 유지보수 </p>

              <h4 className="job-subject">Remotemeeting Admin 사이트 신규개발 및 유지보수
                <Button type="transparent" size="auto" onClick={() => {onShowDialog('dashboard')}}>
                  <MaterialIcon icon="image_search" size={30} />
                </Button>
                <Button type="transparent" size="auto" onClick={() => {onShowDialog('stat')}}>
                  <MaterialIcon icon="image_search" size={30} />
                </Button>
              </h4>
              <div className="term">2016.01 ~ 2017.08</div>
              <p>화상회의 서비스인 Remotemeeting 관련 데이터를 관리하는 어드민 사이트입니다.(대시보드, 사용자관리, box관리, 통계, 결제관리, 회의설정등등)
                <br />전체 사이트를 혼자 도맡아서 진행한 프로젝트이며 UI/UX작업을 비롯하여 api 연동하는 작업을 주로 했습니다.</p>
              <p className="stack">HTML, CSS, jQuery, javaScript, bootstrap, handlebars.js, chartjs, Gulp, SASS</p>

              <h4 className="job-subject">홈페이지 개발</h4>
              <div className="term">2014.09 ~ 2015.12</div>
              <p>알서포트 기업 홈페이지 리뉴얼 작업과 서비스 홈페이지(리모트콜, 모비즌, 게임덕)를 유지보수작업하였습니다.</p>
              <p className="stack">워드프레스, HTML, CSS, jQuery</p>
            </div>
          </div>
          <div className="experience-content">
            <div className="left-info">
              <div className="company">(주)언어과학</div>
              <div className="term">2012.09 ~ 2014.08</div>
            </div>
            <div className="right-info">
              <h4 className="job-subject">EBS 자기주도 학습앱, 스쿨매니저, (주)교원 도요새 학습프로그램</h4>
              <p>학교에서 사용하는 관리 프로그램(스쿨매니저)과 영어 학습하는 프로그램의 UI개발을 담당했습니다. 주로 퍼블리싱에 가까운 작업들입니다.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ResumePage;
