import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'components/common/Button';
import Dialog from '.';
import 'assets/styles/main.scss';

class WrapperDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBasicOpen: false,
      customOpen: false,
    };
    document.body.id = 'place-dialog';
  }

  onOpen = () => {
    this.setState({ isBasicOpen: true });
  };
  onHide = () => {
    this.setState({ isBasicOpen: false });
  };

  onCustomOpen = () => {
    this.setState({ customOpen: true });
  };

  onCustomHide = () => {
    this.setState({ customOpen: false });
  };

  render() {
    const { onHide, onOpen, onCustomOpen, onCustomHide } = this;
    const { isBasicOpen, customOpen } = this.state;

    return (
      <div>
        <h1>다이얼로그 열기 페이지</h1>
        <br />
        <Button type="primary" size="l" onClick={onOpen}>
          BASIC 다이얼로그 열기
        </Button>{' '}
        <Button type="primary" size="l" onClick={onCustomOpen}>
          CUSTOM 다이얼로그 열기
        </Button>
        {isBasicOpen && (
          <Dialog
            title="제목입니다."
            contents={
              <div>
                내용입니다. <br />
                내용입니다.
              </div>
            }
            onHide={onHide}
          >
            <Button type="primary" size="m">
              버튼 샘플
            </Button>
            <Button type="cancel" size="m" onClick={onHide}>
              취소
            </Button>
          </Dialog>
        )}
        {customOpen && (
          <Dialog type="custom" onHide={onCustomHide}>
            <h2>다이얼로그 제목</h2>
            <br />
            <h3>다이얼로그 소제목</h3>
            <br />
            <p>다이얼로그 컨텐츠 입니다.</p>
            <br />
            <br />
            <div className="wrap-button">
              <Button type="cancel" size="m" onClick={onCustomHide}>
                닫기
              </Button>
            </div>
          </Dialog>
        )}
      </div>
    );
  }
}

storiesOf('Dialog', module)
  .addParameters({
    info: {
      text: `
        다이얼로그 
        ## Source1 basic type
        **<Dialog  title="제목입니다."  contents="내용입니다."  onHide={action(onHide())}>  
            <Button type="primary" size="m">버튼 샘플</Button>  
            <Button type="cancel" size="m">취소</Button>  
          </Dialog>**
        ## Source2 custom type
        **<Dialog type="custom" onHide={action(onHide())}>직접 작성</Dialog>**
        
      `,
      inline: true,
      header: false,
      source: false,
      propTables: [Dialog],
      propTablesExclude: [WrapperDialog],
    },
  })
  .add('Default', () => <WrapperDialog />);
