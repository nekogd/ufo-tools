import { FC } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';
import { BannerType } from '../types/types';

type PropsType = BannerType;

export const Banner: FC<PropsType> = ({ text = 'banner', backgroundColor }) => {
  console.log(backgroundColor);
  console.log(text);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: backgroundColor ? backgroundColor : theme.palette.common.black }}>{text}</Box>
    </ThemeProvider>
  );
};
