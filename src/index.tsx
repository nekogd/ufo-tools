import React from 'react';
import './index.css';
import r2wc from '@r2wc/react-to-web-component';
import { BannerWithProviders } from './components/banner-with-providers';

const BannerWC = r2wc(BannerWithProviders, {
  props: {
    position: 'string',
    text: 'string',
    backgroundColor: 'string',
    textAlign: 'string',
  },
});

customElements.define('banner-wc', BannerWC);
