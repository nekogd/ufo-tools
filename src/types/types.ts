export type BannerButtonType = {
  text: string;
  link?: string;
  action?: () => null;
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
  fontSize?: string;
  border?: string;
};

export type BannerType = {
  id?: string;
  type?: 'draft';
  position?: 'top' | 'bottom';
  title?: string;
  text?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textAlign?: 'left' | 'center' | 'right';
  margin?: string;
  link?: string;
  button?: BannerButtonType;
  border?: string;
  minHeight?: string;
  maxWidth?: string;
  fontSize?: string;
};
