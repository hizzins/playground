import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import 'assets/styles/main.scss';
import Select from '.';

class SelectWrap extends Component {
  constructor(props) {
    super(props);
    this.state = { test: '기본값', test1: '기본값1' };
    this.testOptions = [
      { id: 'option1', value: 'Option 01' },
      { id: 'option2', value: 'Option 02' },
      { id: 'option3', value: 'Option 03' },
      { id: 'option4', value: 'Option 04' },
    ];
    this.test1Options = [
      { id: 'option1', value: 'Large Option 01' },
      { id: 'option2', value: 'Large Option 02' },
      { id: 'option3', value: 'Large Option 03' },
      { id: 'option4', value: 'Large Option 04' },
    ];
  }

  onChangeTest = (selected) => {
    const { testOptions } = this;

    for (let i = 0; i < testOptions.length; i++) {
      if (testOptions[i].id === selected) {
        this.setState({ test: testOptions[i].value });
        break;
      }
    }
  };

  onChangeTest1 = (selected) => {
    const { test1Options } = this;
    for (let i = 0; i < test1Options.length; i++) {
      if (test1Options[i].id === selected) {
        this.setState({ test1: test1Options[i].value });
        break;
      }
    }
  };

  render() {
    const { testOptions, test1Options, onChangeTest, onChangeTest1 } = this;
    const { test, test1 } = this.state;

    return (
      <div>
        <h4>default</h4>
        <br />
        <Select name="test" value={test} onChange={onChangeTest}>
          {testOptions.map((item) => (
            <div valueID={item.id} key={item.id}>
              {item.value}
            </div>
          ))}
        </Select>
        <br />
        <h4>size="large"</h4>
        <br />
        <Select name="test1" size="large" value={test1} onChange={onChangeTest1}>
          {test1Options.map((item) => (
            <div valueID={item.id} key={item.id}>
              {item.value}
            </div>
          ))}
        </Select>
      </div>
    );
  }
}

storiesOf('Select', module)
  .addParameters({
    info: {
      text: `
        ## Source
        **<Select name="test" value="Option 01" valueID="option1">  
            <div valueID="option1">Option 01</div>  
            <div valueID="option2">Option 02 02</div>  
            <div valueID="option3">Option 03</div>  
            <div valueID="option4">Option 04</div>  
          </Select>** 
      `,
      inline: true,
      header: false,
      source: false,
      propTables: [Select],
      propTablesExclude: [SelectWrap],
    },
  })
  .add('Default', () => <SelectWrap />);
