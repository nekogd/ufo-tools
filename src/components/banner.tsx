import { FC } from 'react';

type PropsType = {
  text?: string;
};

export const Banner: FC<PropsType> = ({ text = 'banner' }) => <div>{text}</div>;
