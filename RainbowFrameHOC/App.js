import React, { Fragment } from 'react';
import withRainbowFrame from './components/withRainbowFrame';

const App = () => {
  const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  const FramedFragment = withRainbowFrame(colors)(Fragment);
  return (
    <FramedFragment>
      Hello!
    </FramedFragment>
  );
};

export default App;
