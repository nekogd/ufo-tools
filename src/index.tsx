import React from 'react';
import './index.css';
import r2wc from '@r2wc/react-to-web-component';
import { Banner } from './components/banner';

const BannerWC = r2wc(Banner, {
  props: { text: 'string', backgroundColor: 'string' },
});

const Button: React.FC<{
  text: string;
}> = ({ text }) => {
  return <h1>Hello, {text}!</h1>;
};

const HelloButton = r2wc(Button, {
  props: { text: 'string' },
});

customElements.define('hello-button', HelloButton);
customElements.define('banner-wc', BannerWC);
