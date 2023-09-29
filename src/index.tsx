import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import r2wc from '@r2wc/react-to-web-component';
import { Banner } from './components/banner';

const BannerWC = r2wc(Banner, {
  props: { text: 'string' },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App name="user" />
  </React.StrictMode>,
);

customElements.define('banner-wc', BannerWC);
