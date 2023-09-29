import { FC } from 'react';

const App: FC<{
  name: string;
}> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default App;
