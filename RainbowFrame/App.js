import React from 'react';
import RainbowFrame from './components/RainbowFrame';

const App = () => {
  const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  return (
    <RainbowFrame colors={colors}>
      Hello!
    </RainbowFrame>
  );
};

export default App;
