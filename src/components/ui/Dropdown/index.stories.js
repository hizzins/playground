import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import 'contents/scss/style.scss';
import Dropdown from './Dropdown';
import './stories.scss';

const goNaver = () => {
  location.href = 'http://naver.com';
}

const DropDownPage = () => {
  return (
    <div>
      <Dropdown id="dropdown-simple" customClass="dropdown" type="left" title={<div><span>Drop Down</span><MaterialIcon icon="arrow_drop_down" /></div>}>
        <ul className="drop-down-list">
          <li onClick={goNaver}>네이버로 이동1</li>
          <li onClick={goNaver}>네이버로 이동2</li>
          <li onClick={goNaver}>네이버로 이동3</li>
          <li onClick={goNaver}>네이버로 이동14</li>
        </ul>
      </Dropdown>
      <Dropdown
        id="dropdown-template"
        customClass="drop-down-theme"
        title={
          <div className="upload-theme">
            <MaterialIcon icon="panorama" size={20} />
          </div>
        }
      >
        <div className="wrap-template">
          <p>템플릿 선택</p>
          <ul>
            <li className="thumbnail">
              😀
            </li>
            <li className="thumbnail">
              😀
            </li>
            <li className="thumbnail">
              😀
            </li>
            <li className="thumbnail">
              😀
            </li>
            <li className="thumbnail">
              😀
            </li>
            <li className="thumbnail">
              😀
            </li>
          </ul>
        </div>
      </Dropdown>
    </div>
  );
}

storiesOf('DropDown', module)
  .addParameters({
    info: {
      text: `
      드롭다운 UI
      `,
      inline: true,
      header: false,
      source: false,
    },
  })
  .add('Default', () => (
    <DropDownPage />
  ));
