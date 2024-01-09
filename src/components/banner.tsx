import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { BannerType } from '../types/types';
import { usePromoBannerQuery } from '../hooks/use-promo-banner.query';

// pozycja:
//  1 przyklejony do góry
//  2 przyklejony do dołu
//  3 statyczna - domyślna
//
// margines - umożliwienie zrobienia odstępu np pod pozycja fixed od góry, ale z odstępem aby nie przesłaniać menu z nawigacją
//
// typ:
// 1 banner jako link
// 2 banner z buttonem który jest linkiem
// 3 banner bez żadnej akcji
// 4 myślałem o dodaniu buttona z customową funkcją, tylko problem z implementacją skoro dane przychodzą z panelu admina, ewentualnie to jedno można zrobić jako props
//
// tryb:
// 1 preview - jest to komponent osadzony w panelu admina, przyjmuje propsy, które są modyfikowalnym stanem w panelu (react context)
// 2 zapisany gotowy komponent - jako props otrzymuje id, query przyjmuje id jako parametr i zwraca dane
//
// elementy:
// 1 może przyjmować tekst, link, button i obrazek jako tło
// 2 to co wyżej i dodatkowo można rozważyć tytuł - element <h1-h6>, tekst <p> jedno pole domyślne i dynamiczne dodawane w panelu admina kolejne <p>
//
// właściwości css:
// 1. backgorund-color
// 2. color
// 3. border
// 4. textAlign
// 5. minHeight
// 6. maxWidth
// 7. fontSize

type PropsType = BannerType;

export const Banner: FC<PropsType> = ({ id, type, position = 'top', text = 'banner', backgroundColor, textAlign }) => {
  const { data, isLoading } = usePromoBannerQuery();
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

  return type !== 'draft' ? (
    <>
      {isLoading && 'Loading'}
      {data ? (
        <Box sx={containerStyles}>
          <Typography>{text}</Typography>
        </Box>
      ) : null}
    </>
  ) : (
    <Box sx={containerStyles}>
      <Typography>{text}</Typography>
    </Box>
  );
};
