import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'contents/scss/style.scss';
import { Button, ButtonLink, ButtonNavLink } from '.';

const ButtonPage = () => (
  <div>
    <Button type="major" size="m" onClick={action('클릭')}>
      세미나 만들기
    </Button>
    &nbsp;&nbsp;
    <Button type="major" size="xl" onClick={action('클릭')}>
      버튼 샘플
    </Button>
    <br />
    <br />
    <Button type="transparent" size="xl" onClick={action('클릭')}>
      <span role="img" aria-label="so cool">
        😀
      </span>
      styled dom with click event
    </Button>
    <br />
    <br />
    <Button type="basic" size="s" onClick={action('클릭')}>
      basic
    </Button>
    &nbsp;&nbsp;
    <Button type="basic" size="m" onClick={action('클릭')}>
      버튼 샘플
    </Button>
    &nbsp;&nbsp;
    <Button type="basic" size="l" onClick={action('클릭')}>
      버튼 샘플
    </Button>
    <br />
    <br />
    <Button type="primary" size="s" onClick={action('클릭')}>
      primary
    </Button>
    &nbsp;&nbsp;
    <Button type="primary" size="m" onClick={action('클릭')}>
      버튼샘플
    </Button>
    &nbsp;&nbsp;
    <Button type="primary" size="l" onClick={action('클릭')}>
      버튼샘플
    </Button>
    &nbsp;&nbsp;
    <Button type="primary" size="xl" onClick={action('클릭')}>
      버튼샘플
    </Button>
    &nbsp;&nbsp;
    <Button type="primary" size="xl-wide" onClick={action('클릭')}>
      버튼샘플
    </Button>
    &nbsp;&nbsp;
    <br />
    <br />
    <Button type="cancel" size="m" onClick={action('클릭')}>
      cancel
    </Button>
    &nbsp;&nbsp;
    <br />
    <br />
    <Button type="secondary-light" size="m" onClick={action('클릭')}>
      secondary-light
    </Button>
    <br />
    <br />
    <Button type="primary-light" size="m" onClick={action('클릭')}>
      primary-light
    </Button>
    <br />
    <br />
    <Button type="danger" size="m" onClick={action('클릭')}>
      danger
    </Button>
    <br />
    <br />
    <ButtonLink type="secondary" to="/">
      secondary
    </ButtonLink>
    <br />
    <br />
  </div>
);

storiesOf('Button', module)
  .addParameters({
    info: {
      text: `
        ## Prop Values
        children - button label      
        
        type - major, transparent, basic, primary, cancel, secondary-light, primary-light, danger, secondary  
         
        size - s, m, l, xl, xl-wide, auto  
       
        
        ## Source
        **<Button type="danger" size="l" onClick={action('clicked')}>danger</Button>**  
        
        **<ButtonLink type="major" size="l" to="/">타사이트 이동</ButtonLink>**  
        
        **<ButtonNavLink type="primary" size="l" to="/">홈으로 이동</ButtonNavLink>**  
        
      `,
      inline: true,
      header: false,
      source: false,
      propTables: [Button, ButtonLink, ButtonNavLink],
      propTablesExclude: [ButtonPage],
    },
  })
  .add('Default', () => <ButtonPage />);
