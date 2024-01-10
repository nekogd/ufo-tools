import './index.css';
import r2wc from '@r2wc/react-to-web-component';
import { BannerWithProviders } from './components/banner-with-providers';

const BannerWC = r2wc(BannerWithProviders, {
  props: {
    id: 'string',
    type: 'string',
    position: 'string',
    title: 'string',
    text: 'string',
    backgroundImage: 'string',
    backgroundColor: 'string',
    textAlign: 'string',
    margin: 'string',
    link: 'string',
    button: 'json',
    btnClickHandler: 'function',
    border: 'string',
    minHeight: 'string',
    maxWidth: 'string',
    fontSize: 'string',
  },
});

customElements.define('banner-wc', BannerWC);
