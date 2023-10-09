import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';
import { BannerType } from '../types/types';
import { Banner } from './banner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type PropsType = BannerType;
const queryClient = new QueryClient();
export const BannerWithProviders: FC<PropsType> = ({
  position = 'top',
  text = 'banner',
  backgroundColor,
  textAlign,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Banner textAlign={textAlign} position={position} text={text} backgroundColor={backgroundColor} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
