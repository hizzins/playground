import React, { Component } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import 'assets/styles/main.scss';

import { Input, TimeInput } from '.';

class WrapperInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputBasic: '', inputSimple: '', inputUnderline: '', startTime: '09:00' };
  }
  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { onChangeInput } = this;
    const { inputBasic, inputSimple, inputUnderline, startTime } = this.state;

    return (
      <div style={{ width: '500px', backgroundColor: '#efefef', padding: '20px' }}>
        <h4>Basic</h4>
        <Input name="inputBasic" value={inputBasic} type="text" onChange={onChangeInput} />
        <br />
        <br />
        <h4>Simple</h4>
        <Input name="inputSimple" styleType="simple" type="text" value={inputSimple} onChange={onChangeInput} />
        <br />
        <br />
        <h4>Underline</h4>
        <Input
          name="inputUnderline"
          styleType="underline"
          type="text"
          value={inputUnderline}
          onChange={onChangeInput}
        />
        <br />
        <br />
        <h4>Time</h4>
        <TimeInput name="startTime" time={startTime} onChange={onChangeInput} />
      </div>
    );
  }
}

// TODO: 전역으로 변경하기
addDecorator(withKnobs);
addDecorator(withInfo);

storiesOf('Input', module)
  .addParameters({
    info: {
      text: `
        **value값은 부모 컴포넌트에서 관리.**
        
        ## Source 
        ### Basic
        *****
        **<Input name="inputBasic" value={inputBasic} type="text" onChange={// onChangeInput } />**
    
        ### Simple
        *****
        **<Input name="inputSimple" styleType="simple" type="text" value={inputSimple} onChange={//onChangeInput } />**
        
        ### Underline
        *****
        **<Input name="inputUnderline" styleType="underline" type="text" value={inputUnderline} onChange={//onChangeInput } />**
        
        ### Time
        *****
        **<TimeInput time="09:00" name="startTime" onChange={//onChanged } />**
      `,
      inline: true,
      header: false,
      source: false,
      propTables: [Input, TimeInput],
      propTablesExclude: [WrapperInput],
    },
  })
  .add('Default', () => <WrapperInput />);
