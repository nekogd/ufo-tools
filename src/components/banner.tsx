import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { BannerType } from '../types/types';
import { usePromoBannerQuery } from '../hooks/use-promo-banner.query';

type PropsType = BannerType;

export const Banner: FC<PropsType> = ({ position = 'top', text = 'banner', backgroundColor, textAlign }) => {
  const { data } = usePromoBannerQuery();
  console.log('data from usePromoBannerQuery', data);

  const variableStyles = (...styles: any) => {
    const result = {};
    for (const style of styles) {
      for (const key in style) {
        if (style[key] !== undefined) {
          // @ts-ignore
          result[key] = style[key];
        }
      }
    }
    return result;
  };

  const fixedStyles = {
    position: 'fixed',
    width: '100%',
    left: 0,
    right: 0,
    [position]: 0,
    minHeight: 24,
  };

  const containerStyles = {
    ...fixedStyles,
    ...variableStyles({ backgroundColor: backgroundColor, textAlign: textAlign }),
  };

  return (
    <Box sx={containerStyles}>
      <Typography>{text}</Typography>
    </Box>
  );
};
